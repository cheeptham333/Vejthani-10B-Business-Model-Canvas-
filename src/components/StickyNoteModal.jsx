import React, { useState, useEffect } from 'react';
import { X, Check, Trash2 } from 'lucide-react';

const COLOR_OPTIONS = [
  { id: 'yellow', label: 'สีเหลือง (มาตรฐาน)', bg: 'bg-[#FEF9C3]', border: 'border-[#EAB308]', text: 'text-[#713F12]' },
  { id: 'blue', label: 'สีฟ้า (ลูกค้า/ช่องทาง)', bg: 'bg-[#E0F2FE]', border: 'border-[#0284C7]', text: 'text-[#075985]' },
  { id: 'green', label: 'สีเขียว (รายได้/พันธมิตร)', bg: 'bg-[#DCFCE7]', border: 'border-[#16A34A]', text: 'text-[#14532D]' },
  { id: 'purple', label: 'สีม่วง (ความสัมพันธ์/VIP)', bg: 'bg-[#F3E8FF]', border: 'border-[#9333EA]', text: 'text-[#581C87]' },
  { id: 'gold', label: 'สีทอง (คุณค่าหลัก/10B)', bg: 'bg-[#FEF3C7]', border: 'border-[#D97706]', text: 'text-[#78350F]' },
  { id: 'teal', label: 'สีเขียวน้ำทะเล (นวัตกรรม/การแพทย์)', bg: 'bg-[#CCFBF1]', border: 'border-[#0D9488]', text: 'text-[#115E59]' },
];

export default function StickyNoteModal({
  isOpen,
  onClose,
  onSave,
  onDelete,
  initialText = '',
  initialColor = 'yellow',
  blockTitle = ''
}) {
  const [text, setText] = useState('');
  const [color, setColor] = useState('yellow');

  useEffect(() => {
    if (isOpen) {
      setText(initialText);
      setColor(initialColor || 'yellow');
    }
  }, [isOpen, initialText, initialColor]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSave({ text: text.trim(), color });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-800">
              {initialText ? '✏️ แก้ไขข้อความ Sticky Note' : '➕ เพิ่มข้อความใหม่'}
            </h3>
            {blockTitle && (
              <p className="text-xs text-slate-500 font-medium">{blockTitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Text Area */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              เนื้อหา / กลยุทธ์ / ข้อความ:
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="พิมพ์ข้อความกลยุทธ์ของคุณที่นี่..."
              rows={4}
              autoFocus
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0F2C59] focus:border-[#0F2C59] outline-none leading-relaxed"
            />
          </div>

          {/* Color Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              เลือกสี Sticky Note:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {COLOR_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setColor(opt.id)}
                  className={`flex items-center space-x-2 p-2 rounded-xl border text-xs font-medium transition-all ${
                    color === opt.id
                      ? `${opt.bg} ${opt.border} border-2 shadow-sm font-bold scale-[1.02]`
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${opt.bg} ${opt.border} border`} />
                  <span className="truncate">{opt.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            {initialText && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  onDelete();
                  onClose();
                }}
                className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-rose-200"
              >
                <Trash2 className="w-4 h-4" />
                <span>ลบรายการนี้</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                disabled={!text.trim()}
                className="flex items-center space-x-1.5 px-5 py-2 text-xs font-bold text-white bg-[#0F2C59] hover:bg-[#1E3E62] disabled:opacity-50 rounded-xl transition-all shadow-md"
              >
                <Check className="w-4 h-4 text-[#C5A880]" />
                <span>บันทึกลง Canvas</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
