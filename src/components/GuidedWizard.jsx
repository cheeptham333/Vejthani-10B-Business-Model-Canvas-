import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  BMC_BLOCKS, 
  BMC_BLOCKS_MAP 
} from '../data/bmcBlocks';
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
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Check, 
  HelpCircle, 
  Lightbulb, 
  LayoutGrid, 
  CheckCircle2, 
  Trash2,
  Edit2,
  FileText,
  Send,
  Download,
  Eye,
  Image as ImageIcon
} from 'lucide-react';

const ICON_MAP = {
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

const STICKY_COLOR_MAP = {
  yellow: 'bg-[#FEF9C3] border-l-4 border-[#EAB308] text-[#713F12]',
  blue: 'bg-[#E0F2FE] border-l-4 border-[#0284C7] text-[#075985]',
  green: 'bg-[#DCFCE7] border-l-4 border-[#16A34A] text-[#14532D]',
  purple: 'bg-[#F3E8FF] border-l-4 border-[#9333EA] text-[#581C87]',
  gold: 'bg-[#FEF3C7] border-l-4 border-[#D97706] text-[#78350F]',
  teal: 'bg-[#CCFBF1] border-l-4 border-[#00A3AD] text-[#006066]',
};

export default function GuidedWizard({
  currentStep,
  setCurrentStep,
  bmcData,
  strategyInfo,
  onAddNote,
  onEditNote,
  onDeleteNote,
  onSwitchToCanvas,
  onOpenExportModal
}) {
  const activeBlock = BMC_BLOCKS[currentStep - 1] || BMC_BLOCKS[0];
  const IconComponent = ICON_MAP[activeBlock.icon] || Sparkles;

  // Selected fill-in template state
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [fieldValues, setFieldValues] = useState({});
  const [customText, setCustomText] = useState('');
  const [customColor, setCustomColor] = useState('yellow');

  const activeTemplate = activeBlock.fillInTemplates?.[selectedTemplateIndex] || activeBlock.fillInTemplates?.[0];

  // Initialize field values when template or block changes
  useEffect(() => {
    if (activeTemplate) {
      setFieldValues(activeTemplate.defaults || {});
    }
  }, [currentStep, selectedTemplateIndex, activeTemplate]);

  // Generate populated sentence from template
  const getPopulatedSentence = () => {
    if (!activeTemplate) return '';
    let result = activeTemplate.template;
    Object.keys(fieldValues).forEach((key) => {
      const val = fieldValues[key] || `[${key}]`;
      result = result.replace(`[${key}]`, val);
    });
    return result;
  };

  const handleFieldChange = (key, value) => {
    setFieldValues((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleAddPopulatedTemplate = () => {
    const sentence = getPopulatedSentence();
    if (sentence.trim()) {
      onAddNote(activeBlock.id, {
        text: sentence.trim(),
        color: activeBlock.stepNumber === 5 ? 'gold' : 'blue'
      });
    }
  };

  const handleAddCustomNote = (e) => {
    e.preventDefault();
    if (!customText.trim()) return;
    onAddNote(activeBlock.id, {
      text: customText.trim(),
      color: customColor
    });
    setCustomText('');
  };

  const handleQuickAdd = (exampleText) => {
    onAddNote(activeBlock.id, {
      text: exampleText,
      color: 'yellow'
    });
  };

  const handleNext = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
      setSelectedTemplateIndex(0);
    } else {
      // Completed all 9 steps! Fire celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onSwitchToCanvas();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setSelectedTemplateIndex(0);
    }
  };

  const currentItems = bmcData[activeBlock.id] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top 9-Step Progress Navigation Pill Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between min-w-[720px] space-x-2">
          {BMC_BLOCKS.map((block) => {
            const isCurrent = block.stepNumber === currentStep;
            const itemCount = (bmcData[block.id] || []).length;
            const isCompleted = itemCount > 0;
            const StepIcon = ICON_MAP[block.icon] || Sparkles;

            return (
              <button
                key={block.id}
                onClick={() => {
                  setCurrentStep(block.stepNumber);
                  setSelectedTemplateIndex(0);
                }}
                className={`flex-1 flex flex-col items-center p-2.5 rounded-xl transition-all relative ${
                  isCurrent
                    ? 'bg-[#002D62] text-white shadow-md scale-[1.03]'
                    : isCompleted
                    ? 'bg-teal-50 text-[#006066] border border-teal-200 hover:bg-teal-100'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center space-x-1 mb-1">
                  <span className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${
                    isCurrent ? 'bg-[#00A3AD] text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {block.stepNumber}
                  </span>
                  <StepIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold truncate max-w-[95px] text-center leading-tight">
                  {block.titleTh.split('.')[1] || block.titleTh}
                </span>
                <span className={`text-[10px] mt-0.5 font-medium ${
                  isCurrent ? 'text-teal-200' : isCompleted ? 'text-teal-700 font-bold' : 'text-slate-400'
                }`}>
                  {itemCount} ข้อ
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Wizard Area (Two Columns Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Step Coaching & Fill-in-the-blank Builder */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Coaching Hero Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 relative overflow-hidden">
            
            {/* Background Accent Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00A3AD]/10 via-blue-50/20 to-transparent rounded-bl-full pointer-events-none" />

            {/* Block Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center space-x-3.5">
                <div className={`w-12 h-12 rounded-2xl ${activeBlock.badgeColor} flex items-center justify-center font-bold text-lg shadow-md`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase">
                      ขั้นตอนที่ {activeBlock.stepNumber} จาก 9
                    </span>
                    <span className="text-xs text-slate-400">|</span>
                    <span className="text-xs font-semibold text-[#00A3AD]">{activeBlock.titleEn}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#002D62] mt-0.5">
                    {activeBlock.titleTh}
                  </h2>
                </div>
              </div>

              {/* Osterwalder Info Tag */}
              <div className="hidden sm:block text-right">
                <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Alexander Osterwalder
                </span>
              </div>
            </div>

            {/* Definition & 10B Coaching Goal */}
            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-[#002D62]">นิยามหลัก:</span> {activeBlock.description}
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-sm text-teal-950 flex items-start space-x-2.5">
                <Lightbulb className="w-5 h-5 text-[#00A3AD] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#006066]">เป้าหมายโค้ชชิ่งสู่ 10,000 ล้าน (10B Coaching Goal):</span>
                  <p className="mt-0.5 text-xs sm:text-sm text-teal-900 leading-relaxed">
                    {activeBlock.coachingGoal}
                  </p>
                </div>
              </div>
            </div>

            {/* Provocative Coaching Questions */}
            <div className="mb-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#002D62] flex items-center gap-1.5 mb-2">
                <HelpCircle className="w-4 h-4 text-[#00A3AD]" />
                <span>คำถามชวนคิดสำหรับทีมงานเวชธานี (Strategic Brainstorming):</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-blue-950 font-medium">
                {activeBlock.coachingQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#00A3AD] font-bold">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ✍️ Section: Interactive Fill-in-the-Blank Builder (เติมคำในช่องว่าง) */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">✍️</span>
                  <h3 className="font-extrabold text-[#002D62] text-sm sm:text-base">
                    ตัวช่วยเติมคำในช่องว่าง (Fill-in-the-Blank Generator)
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  เลือกรูปแบบประโยค แล้วเติมข้อมูลกลยุทธ์ของคุณ
                </span>
              </div>

              {/* Template Selectors */}
              <div className="flex flex-wrap gap-2 mb-4">
                {activeBlock.fillInTemplates?.map((tpl, idx) => (
                  <button
                    key={tpl.id}
                    onClick={() => setSelectedTemplateIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedTemplateIndex === idx
                        ? 'bg-[#002D62] text-white shadow-sm font-bold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tpl.title}
                  </button>
                ))}
              </div>

              {/* Fill-in Fields Inputs */}
              {activeTemplate && (
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.keys(activeTemplate.defaults || {}).map((fieldKey) => (
                      <div key={fieldKey} className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">
                          {fieldKey}:
                        </label>
                        <input
                          type="text"
                          value={fieldValues[fieldKey] || ''}
                          onChange={(e) => handleFieldChange(fieldKey, e.target.value)}
                          placeholder={`พิมพ์ ${fieldKey}...`}
                          className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#002D62] focus:border-[#002D62] outline-none text-slate-800 font-medium"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Live Generated Sentence Preview */}
                  <div className="mt-3 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    <span className="font-bold text-amber-900 block mb-1">
                      ข้อความกลยุทธ์ที่สร้างได้ (Live Preview):
                    </span>
                    "{getPopulatedSentence()}"
                  </div>

                  {/* Add Template Button */}
                  <button
                    type="button"
                    onClick={handleAddPopulatedTemplate}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#002D62] hover:bg-[#0B3B7B] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg border border-[#00A3AD]/40"
                  >
                    <Plus className="w-4 h-4 text-[#00A3AD]" />
                    <span>➕ นำข้อความนี้เข้าสู่ผืนผ้าใบ Canvas</span>
                  </button>
                </div>
              )}
            </div>

            {/* ⚡ Section: Quick-Add Hospital Suggestion Chips */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">⚡</span>
                <h3 className="font-extrabold text-[#002D62] text-xs sm:text-sm">
                  ไอเดียแนะนำสำหรับโรงพยาบาลเวชธานี (คลิกเดียวเพิ่มลง Canvas):
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeBlock.hospitalExamples?.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickAdd(ex)}
                    className="text-left px-3 py-2 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-[#006066] border border-slate-200 hover:border-teal-300 text-xs text-slate-700 font-medium transition-all group flex items-center space-x-1.5"
                  >
                    <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A3AD] shrink-0" />
                    <span>{ex}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 📝 Section: Manual Custom Sticky Note Adder */}
            <form onSubmit={handleAddCustomNote} className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-lg">📝</span>
                <h3 className="font-extrabold text-[#002D62] text-xs sm:text-sm">
                  พิมพ์ข้อความกลยุทธ์เองเพิ่มเติม:
                </h3>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="พิมพ์ไอเดียหรือข้อความที่ต้องการบันทึก..."
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#002D62] outline-none"
                />
                <button
                  type="submit"
                  disabled={!customText.trim()}
                  className="px-5 py-2.5 bg-[#002D62] hover:bg-[#0B3B7B] disabled:opacity-50 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shrink-0 flex items-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>เพิ่ม</span>
                </button>
              </div>
            </form>

          </div>

          {/* Navigation Controls (Bottom Bar) */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed font-bold text-xs sm:text-sm text-slate-700 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ย้อนกลับ</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={onSwitchToCanvas}
                className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#002D62] bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <LayoutGrid className="w-4 h-4 text-[#00A3AD]" />
                <span>ดูผืนผ้าใบเต็ม 9 ช่อง (Canvas)</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#002D62] via-[#0B3B7B] to-[#002D62] hover:opacity-95 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg border border-[#00A3AD]/30"
              >
                <span>{currentStep === 9 ? '🎉 ดูผืนผ้าใบเต็ม & ส่งออกภาพ' : 'ขั้นตอนถัดไป'}</span>
                <ChevronRight className="w-4 h-4 text-[#00A3AD]" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column (4 cols): Sticky Notes in Current Block & Live Mini-Canvas Map */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Action Quick Banner: View & Export Image */}
          <div className="bg-gradient-to-br from-[#002D62] to-[#0B2545] p-4 rounded-3xl text-white shadow-md border border-[#00A3AD]/30 flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🖼️</span>
                <div>
                  <h4 className="font-extrabold text-sm text-white">
                    ภาพ Canvas พร้อมแสดงผล
                  </h4>
                  <p className="text-[11px] text-teal-200 font-medium">
                    คลิกเพื่อเปิดดูรูปภาพเต็มหรือดาวน์โหลด
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={onSwitchToCanvas}
                className="flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-[#00A3AD]" />
                <span>ดูภาพหน้าเต็ม</span>
              </button>

              <button
                onClick={onOpenExportModal}
                className="flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-xl bg-[#00A3AD] hover:bg-[#00828A] text-white font-extrabold text-xs shadow-md transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>ส่งออกภาพ PNG</span>
              </button>
            </div>
          </div>

          {/* 🗺️ Live 9-Box Mini-Map Visualizer */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-1.5">
                <span className="text-sm">🗺️</span>
                <h4 className="font-extrabold text-xs text-[#002D62] uppercase tracking-wide">
                  แผนที่ 9 ช่องผืนผ้าใบ (Mini-Canvas Map)
                </h4>
              </div>
              <span className="text-[10px] font-bold text-slate-400">
                Osterwalder Layout
              </span>
            </div>

            {/* Mini Grid Diagram */}
            <div className="grid grid-cols-5 gap-1 text-[9px] font-bold text-center">
              {/* Top Row: KP (8), KA (7) & KR (6), VP (2), CR (4) & CH (3), CS (1) */}
              <div 
                onClick={() => setCurrentStep(8)}
                className={`row-span-2 p-1.5 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                  currentStep === 8 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
                title="8. Key Partnerships"
              >
                <span className="text-[8px] text-slate-400">8</span>
                <span>พันธมิตร</span>
                <span className="text-[8px] font-normal">({(bmcData.keyPartnerships || []).length})</span>
              </div>

              <div className="col-span-1 space-y-1">
                <div 
                  onClick={() => setCurrentStep(7)}
                  className={`p-1 rounded-lg border cursor-pointer transition-all ${
                    currentStep === 7 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                  title="7. Key Activities"
                >
                  <span className="text-[8px]">7 กิจกรรม ({(bmcData.keyActivities || []).length})</span>
                </div>
                <div 
                  onClick={() => setCurrentStep(6)}
                  className={`p-1 rounded-lg border cursor-pointer transition-all ${
                    currentStep === 6 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                  title="6. Key Resources"
                >
                  <span className="text-[8px]">6 ทรัพยากร ({(bmcData.keyResources || []).length})</span>
                </div>
              </div>

              <div 
                onClick={() => setCurrentStep(2)}
                className={`row-span-2 p-1.5 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                  currentStep === 2 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                }`}
                title="2. Value Propositions"
              >
                <span className="text-[8px] text-amber-600">2</span>
                <span>คุณค่าหลัก</span>
                <span className="text-[8px] font-normal">({(bmcData.valuePropositions || []).length})</span>
              </div>

              <div className="col-span-1 space-y-1">
                <div 
                  onClick={() => setCurrentStep(4)}
                  className={`p-1 rounded-lg border cursor-pointer transition-all ${
                    currentStep === 4 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                  title="4. Customer Relationships"
                >
                  <span className="text-[8px]">4 สัมพันธ์ ({(bmcData.customerRelationships || []).length})</span>
                </div>
                <div 
                  onClick={() => setCurrentStep(3)}
                  className={`p-1 rounded-lg border cursor-pointer transition-all ${
                    currentStep === 3 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                  title="3. Channels"
                >
                  <span className="text-[8px]">3 ช่องทาง ({(bmcData.channels || []).length})</span>
                </div>
              </div>

              <div 
                onClick={() => setCurrentStep(1)}
                className={`row-span-2 p-1.5 rounded-lg border flex flex-col items-center justify-center cursor-pointer transition-all ${
                  currentStep === 1 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
                title="1. Customer Segments"
              >
                <span className="text-[8px] text-slate-400">1</span>
                <span>ลูกค้า</span>
                <span className="text-[8px] font-normal">({(bmcData.customerSegments || []).length})</span>
              </div>
            </div>

            {/* Bottom Row: Cost Structure (9) & Revenue Streams (5) */}
            <div className="grid grid-cols-2 gap-1 text-[9px] font-bold text-center pt-1 border-t border-slate-100">
              <div 
                onClick={() => setCurrentStep(9)}
                className={`p-1.5 rounded-lg border cursor-pointer transition-all ${
                  currentStep === 9 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
                title="9. Cost Structure"
              >
                <span>9. โครงสร้างต้นทุน ({(bmcData.costStructure || []).length})</span>
              </div>
              <div 
                onClick={() => setCurrentStep(5)}
                className={`p-1.5 rounded-lg border cursor-pointer transition-all ${
                  currentStep === 5 ? 'bg-[#002D62] text-white ring-2 ring-[#00A3AD]' : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                }`}
                title="5. Revenue Streams"
              >
                <span>5. กระแสรายได้ 10B ({(bmcData.revenueStreams || []).length})</span>
              </div>
            </div>
          </div>

          {/* Current Block Items Container */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#00A3AD]" />
                <h3 className="font-extrabold text-[#002D62] text-sm">
                  รายการในช่องนี้ ({currentItems.length})
                </h3>
              </div>
              <span className="text-[11px] font-medium text-slate-400">
                {activeBlock.titleEn}
              </span>
            </div>

            {/* List of notes */}
            <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[360px] pr-1">
              {currentItems.length === 0 ? (
                <div className="py-8 px-4 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                  <FileText className="w-7 h-7 text-slate-300 mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-slate-500">
                    ยังไม่มีข้อความในช่องนี้
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    ใช้ตัวช่วยเติมคำในช่องว่าง หรือกดไอเดียแนะนำด้านซ้ายเพื่อเพิ่มข้อมูล
                  </p>
                </div>
              ) : (
                currentItems.map((item, idx) => {
                  const styleClass = STICKY_COLOR_MAP[item.color] || STICKY_COLOR_MAP.yellow;
                  return (
                    <div
                      key={item.id || idx}
                      className={`p-3 rounded-xl text-xs font-medium leading-relaxed shadow-sm relative group transition-all hover:scale-[1.01] ${styleClass}`}
                    >
                      <div className="pr-6 break-words">
                        {item.text}
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                        <button
                          onClick={() => onDeleteNote(activeBlock.id, idx)}
                          className="p-1 text-rose-600 hover:text-rose-800 hover:bg-white/80 rounded"
                          title="ลบ"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Summary Progress Box */}
            <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 p-3 rounded-xl text-xs text-slate-600 flex items-center justify-between">
              <span>ความคืบหน้ารวม:</span>
              <span className="font-extrabold text-[#002D62]">
                {Object.values(bmcData).reduce((sum, arr) => sum + arr.length, 0)} รายการทั้ง Canvas
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
