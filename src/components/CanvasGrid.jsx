import React, { useState, forwardRef } from 'react';
import CanvasCard from './CanvasCard';
import VejthaniLogo from './VejthaniLogo';
import { BMC_BLOCKS, BMC_BLOCKS_MAP } from '../data/bmcBlocks';
import { 
  Building2, 
  Calendar, 
  User, 
  TrendingUp, 
  Sparkles, 
  Award,
  ArrowRight,
  HelpCircle,
  LayoutGrid,
  ListOrdered
} from 'lucide-react';

const CanvasGrid = forwardRef(function CanvasGrid(
  {
    bmcData,
    strategyInfo,
    onAddNote,
    onEditNote,
    onDeleteNote,
    onJumpToWizard,
    onOpenCenterModal
  },
  ref
) {
  // 'classic' (Osterwalder Spatial 9-Box) vs 'sequential' (Numbered 1-9 Grid)
  const [gridLayout, setGridLayout] = useState('classic');
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div
      ref={ref}
      id="vejthani-bmc-canvas"
      className="bmc-export-container bg-[#F8FAFC] p-4 sm:p-6 lg:p-8 rounded-3xl border border-slate-200/80 shadow-sm max-w-[1540px] mx-auto"
    >
      {/* Canvas Header / Poster Banner with Official Vejthani CI */}
      <div className="bg-gradient-to-r from-[#002D62] via-[#072044] to-[#002D62] text-white p-5 sm:p-7 rounded-3xl shadow-lg border border-[#00A3AD]/30 mb-6 relative overflow-hidden">
        
        {/* Background Subtle Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#00A3AD_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          
          {/* Logo & Strategy Title */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2.5 rounded-2xl shadow-md shrink-0 border border-slate-100 flex items-center justify-center">
              <VejthaniLogo size="md" />
            </div>
            <div>
              <div className="flex items-center space-x-2.5 flex-wrap">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  BUSINESS MODEL CANVAS
                </span>
                <span className="bg-gradient-to-r from-[#00A3AD] to-emerald-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                  10B BluePrint
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-[#E8D5B5] mt-1">
                {strategyInfo.title || 'แผนกลยุทธ์เพิ่มรายได้ 10,000 ล้านบาท | Alexander Osterwalder Framework'}
              </h1>
            </div>
          </div>

          {/* Strategy Meta Badges */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            {strategyInfo.department && (
              <div 
                onClick={onOpenCenterModal}
                className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center space-x-2 cursor-pointer hover:bg-white/20 transition-colors no-export"
                title="คลิกเพื่อเปลี่ยนศูนย์การแพทย์"
              >
                <Building2 className="w-3.5 h-3.5 text-[#00A3AD]" />
                <span className="text-slate-300 font-medium">ศูนย์/แผนก:</span>
                <span className="font-extrabold text-white">{strategyInfo.department}</span>
              </div>
            )}

            {/* Static print/export friendly version of department */}
            <div className="hidden export-only bg-white/10 px-3.5 py-2 rounded-xl border border-white/20 items-center space-x-2">
              <Building2 className="w-3.5 h-3.5 text-[#00A3AD]" />
              <span className="text-slate-300">ศูนย์/แผนก:</span>
              <span className="font-bold text-white">{strategyInfo.department}</span>
            </div>

            {strategyInfo.targetRevenue && (
              <div className="bg-emerald-500/25 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-400/40 flex items-center space-x-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-200 font-medium">เป้าหมาย:</span>
                <span className="font-black text-emerald-300">{strategyInfo.targetRevenue}</span>
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center space-x-2">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-slate-300">วันที่:</span>
              <span className="font-semibold text-white">
                {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
            </div>

            <div className="bg-[#C5A880]/20 backdrop-blur-md px-3 py-2 rounded-xl border border-[#C5A880]/30 flex items-center space-x-1.5 text-[#E8D5B5] font-bold">
              <Award className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>JCI Accredited</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🧭 Osterwalder Layout Controller & Explanation Notice (No-Export) */}
      <div className="mb-5 no-export bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Layout Switcher */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-700">รูปแบบการจัดเรียงช่อง:</span>
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setGridLayout('classic')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                gridLayout === 'classic'
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>ผืนผ้าใบมาตรฐาน Osterwalder</span>
            </button>

            <button
              onClick={() => setGridLayout('sequential')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                gridLayout === 'sequential'
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5 text-[#00A3AD]" />
              <span>🔢 เรียงตามลำดับ 1 ถึง 9</span>
            </button>
          </div>
        </div>

        {/* Why Osterwalder layout explanation toggle */}
        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="flex items-center space-x-1.5 text-xs text-[#00828A] hover:text-[#002D62] font-semibold transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#00A3AD]" />
          <span>ทำไมผืนผ้าใบมาตรฐานจึงไม่ได้เรียงซ้ายไปขวา 1-9?</span>
        </button>

      </div>

      {/* Accordion Explanation Box */}
      {showExplanation && (
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 space-y-2 no-export animate-in fade-in duration-200">
          <div className="flex items-center space-x-2 text-[#002D62] font-bold">
            <Sparkles className="w-4 h-4 text-[#00A3AD]" />
            <span>หลักการออกแบบผืนผ้าใบของ Alexander Osterwalder (The Logic of Business Model Canvas):</span>
          </div>
          <p className="leading-relaxed">
            ผืนผ้าใบถูกแบ่งออกเป็น 2 ซีกตามธรรมชาติของธุรกิจ:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-white rounded-xl border border-blue-100">
              <strong className="text-blue-900 block mb-1">👉 ซีกขวา (Front Stage / Market & Customers):</strong>
              ประกอบด้วย <strong>1. กลุ่มลูกค้า (CS)</strong>, <strong>3. ช่องทาง (CH)</strong>, <strong>4. ความสัมพันธ์ (CR)</strong>, และ <strong>5. รายได้ (RS)</strong> เพื่อเน้นการสร้างคุณค่าให้ผู้ป่วยและสร้างรายได้
            </div>
            <div className="p-3 bg-white rounded-xl border border-blue-100">
              <strong className="text-[#002D62] block mb-1">👈 ซีกซ้าย (Back Stage / Infrastructure & Operations):</strong>
              ประกอบด้วย <strong>8. พันธมิตร (KP)</strong>, <strong>7. กิจกรรม (KA)</strong>, <strong>6. ทรัพยากร (KR)</strong>, และ <strong>9. ต้นทุน (CS)</strong> เพื่อขับเคลื่อนการทำงานเบื้องหลัง
            </div>
          </div>
          <p className="text-[11px] text-slate-500 italic mt-1">
            * ตรงกลางคือ <strong>2. คุณค่าที่ส่งมอบ (Value Propositions)</strong> ซึ่งเป็นสะพานเชื่อมระหว่างการปฏิบัติการหลังบ้านกับตลาดหน้าบ้านครับ
          </p>
        </div>
      )}

      {/* Render Canvas based on selected layout */}
      {gridLayout === 'classic' ? (
        /* The Classic 9-Box Osterwalder Grid Layout */
        <div className="space-y-4">
          
          {/* Top 5 Columns (Key Partners, Activities/Resources, Value Propositions, Relationships/Channels, Customer Segments) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Column 1: Key Partners (Block 8) - Full Height */}
            <div className="lg:col-span-1 min-h-[480px]">
              <CanvasCard
                block={BMC_BLOCKS_MAP.keyPartnerships}
                items={bmcData.keyPartnerships || []}
                onAddNote={onAddNote}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                onJumpToWizard={onJumpToWizard}
              />
            </div>

            {/* Column 2: Key Activities (Block 7) & Key Resources (Block 6) */}
            <div className="lg:col-span-1 flex flex-col gap-4 min-h-[480px]">
              <div className="flex-1 min-h-[230px]">
                <CanvasCard
                  block={BMC_BLOCKS_MAP.keyActivities}
                  items={bmcData.keyActivities || []}
                  onAddNote={onAddNote}
                  onEditNote={onEditNote}
                  onDeleteNote={onDeleteNote}
                  onJumpToWizard={onJumpToWizard}
                />
              </div>
              <div className="flex-1 min-h-[230px]">
                <CanvasCard
                  block={BMC_BLOCKS_MAP.keyResources}
                  items={bmcData.keyResources || []}
                  onAddNote={onAddNote}
                  onEditNote={onEditNote}
                  onDeleteNote={onDeleteNote}
                  onJumpToWizard={onJumpToWizard}
                />
              </div>
            </div>

            {/* Column 3: Value Propositions (Block 2) - Full Height (Centerpiece) */}
            <div className="lg:col-span-1 min-h-[480px] ring-2 ring-[#00A3AD]/60 rounded-2xl shadow-sm">
              <CanvasCard
                block={BMC_BLOCKS_MAP.valuePropositions}
                items={bmcData.valuePropositions || []}
                onAddNote={onAddNote}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                onJumpToWizard={onJumpToWizard}
              />
            </div>

            {/* Column 4: Customer Relationships (Block 4) & Channels (Block 3) */}
            <div className="lg:col-span-1 flex flex-col gap-4 min-h-[480px]">
              <div className="flex-1 min-h-[230px]">
                <CanvasCard
                  block={BMC_BLOCKS_MAP.customerRelationships}
                  items={bmcData.customerRelationships || []}
                  onAddNote={onAddNote}
                  onEditNote={onEditNote}
                  onDeleteNote={onDeleteNote}
                  onJumpToWizard={onJumpToWizard}
                />
              </div>
              <div className="flex-1 min-h-[230px]">
                <CanvasCard
                  block={BMC_BLOCKS_MAP.channels}
                  items={bmcData.channels || []}
                  onAddNote={onAddNote}
                  onEditNote={onEditNote}
                  onDeleteNote={onDeleteNote}
                  onJumpToWizard={onJumpToWizard}
                />
              </div>
            </div>

            {/* Column 5: Customer Segments (Block 1) - Full Height */}
            <div className="lg:col-span-1 min-h-[480px]">
              <CanvasCard
                block={BMC_BLOCKS_MAP.customerSegments}
                items={bmcData.customerSegments || []}
                onAddNote={onAddNote}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                onJumpToWizard={onJumpToWizard}
              />
            </div>

          </div>

          {/* Bottom 2 Columns: Cost Structure (Block 9) & Revenue Streams (Block 5) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Cost Structure (Block 9) */}
            <div className="min-h-[240px]">
              <CanvasCard
                block={BMC_BLOCKS_MAP.costStructure}
                items={bmcData.costStructure || []}
                onAddNote={onAddNote}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                onJumpToWizard={onJumpToWizard}
              />
            </div>

            {/* Revenue Streams (Block 5) */}
            <div className="min-h-[240px]">
              <CanvasCard
                block={BMC_BLOCKS_MAP.revenueStreams}
                items={bmcData.revenueStreams || []}
                onAddNote={onAddNote}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                onJumpToWizard={onJumpToWizard}
              />
            </div>

          </div>

        </div>
      ) : (
        /* Sequential 1 to 9 Grid Layout (Ordered Mode) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BMC_BLOCKS.map((block) => (
            <div key={block.id} className="min-h-[280px]">
              <CanvasCard
                block={block}
                items={bmcData[block.id] || []}
                onAddNote={onAddNote}
                onEditNote={onEditNote}
                onDeleteNote={onDeleteNote}
                onJumpToWizard={onJumpToWizard}
              />
            </div>
          ))}
        </div>
      )}

      {/* Canvas Footer / Framework Attributions */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center space-x-2 flex-wrap">
          <span className="font-extrabold text-[#002D62]">โรงพยาบาลเวชธานี อินเตอร์เนชันแนล</span>
          <span>•</span>
          <span className="font-semibold text-slate-600">Alexander Osterwalder BMC Framework</span>
          <span>•</span>
          <span className="text-[#00A3AD] font-bold">10 Billion Strategy Studio</span>
        </div>
        <div className="text-[11px] text-slate-400 font-medium">
          เอกสารยุทธศาสตร์ภายในสำหรับทีมงานและผู้บริหาร โรงพยาบาลเวชธานี
        </div>
      </div>

    </div>
  );
});

export default CanvasGrid;
