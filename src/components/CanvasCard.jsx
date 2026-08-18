import React from 'react';
import { 
  Users, 
  Sparkles, 
  Radio, 
  HeartHandshake, 
  BadgeDollarSign, 
  Building2, 
  Activity, 
  Handshake, 
  ReceiptText,
  Plus,
  Edit2,
  Trash2,
  HelpCircle,
  Wand2
} from 'lucide-react';

const ICON_COMPONENTS = {
  Users,
  Sparkles,
  Radio,
  HeartHandshake,
  BadgeDollarSign,
  Building2,
  Activity,
  Handshake,
  ReceiptText
};

const STICKY_STYLES = {
  yellow: 'bg-[#FEF9C3] border-l-4 border-[#EAB308] text-[#713F12]',
  blue: 'bg-[#E0F2FE] border-l-4 border-[#0284C7] text-[#075985]',
  green: 'bg-[#DCFCE7] border-l-4 border-[#16A34A] text-[#14532D]',
  purple: 'bg-[#F3E8FF] border-l-4 border-[#9333EA] text-[#581C87]',
  gold: 'bg-[#FEF3C7] border-l-4 border-[#D97706] text-[#78350F]',
  teal: 'bg-[#CCFBF1] border-l-4 border-[#0D9488] text-[#115E59]',
};

export default function CanvasCard({
  block,
  items = [],
  onAddNote,
  onEditNote,
  onDeleteNote,
  onJumpToWizard,
  isMini = false
}) {
  const IconComponent = ICON_COMPONENTS[block.icon] || Sparkles;

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm flex flex-col h-full overflow-hidden transition-all duration-200 hover:shadow-md ${
      isMini ? 'p-3' : 'p-4'
    }`}>
      
      {/* Card Header */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
        <div className="flex items-center space-x-2.5">
          <div className={`w-7 h-7 rounded-lg ${block.badgeColor} flex items-center justify-center font-bold text-xs shadow-sm`}>
            {block.stepNumber}
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight flex items-center gap-1.5">
              <IconComponent className="w-4 h-4 text-slate-500 shrink-0" />
              <span>{block.titleTh}</span>
            </h4>
            {!isMini && (
              <p className="text-[11px] font-medium text-slate-400">
                {block.titleEn}
              </p>
            )}
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-1 no-export">
          {onJumpToWizard && (
            <button
              onClick={() => onJumpToWizard(block.stepNumber)}
              title="เปิดโค้ชชิ่งช่องนี้ในโหมด Wizard"
              className="p-1.5 text-slate-400 hover:text-[#0F2C59] hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Wand2 className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => onAddNote(block.id)}
            title="เพิ่ม Sticky Note"
            className="p-1.5 text-[#0F2C59] hover:bg-[#0F2C59]/10 rounded-lg transition-colors font-bold flex items-center space-x-1 text-xs"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Description / Goal hint */}
      {!isMini && (
        <div className="mb-2.5 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-500 leading-snug">
          <span className="font-semibold text-slate-700">เป้าหมาย:</span> {block.description}
        </div>
      )}

      {/* Sticky Notes Container */}
      <div className="flex-1 space-y-2 overflow-y-auto min-h-[90px] pr-1">
        {items.length === 0 ? (
          <div 
            onClick={() => onAddNote(block.id)}
            className="h-full min-h-[80px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:border-[#0F2C59]/40 hover:bg-slate-50/50 cursor-pointer p-3 transition-colors text-center group"
          >
            <Plus className="w-5 h-5 mb-1 group-hover:text-[#0F2C59] transition-colors" />
            <span className="text-[11px] font-medium text-slate-500 group-hover:text-[#0F2C59]">
              คลิกเพื่อเติมข้อความในช่องนี้
            </span>
          </div>
        ) : (
          items.map((item, index) => {
            const styleClass = STICKY_STYLES[item.color] || STICKY_STYLES.yellow;
            return (
              <div
                key={item.id || index}
                className={`group relative p-2.5 rounded-xl text-xs font-medium leading-relaxed shadow-sm transition-all hover:shadow hover:scale-[1.01] ${styleClass}`}
              >
                <div className="pr-5 break-words">
                  {item.text}
                </div>

                {/* Edit & Delete Action Buttons */}
                <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 no-export">
                  <button
                    onClick={() => onEditNote(block.id, index, item)}
                    title="แก้ไข"
                    className="p-1 text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onDeleteNote(block.id, index)}
                    title="ลบ"
                    className="p-1 text-rose-600 hover:text-rose-800 hover:bg-white/60 rounded"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Card Footer / Item Count */}
      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>{items.length} รายการ</span>
        <button
          onClick={() => onAddNote(block.id)}
          className="text-xs font-semibold text-[#0F2C59] hover:underline flex items-center space-x-0.5 no-export"
        >
          <Plus className="w-3 h-3" />
          <span>เพิ่ม</span>
        </button>
      </div>

    </div>
  );
}
