import React from 'react';
import VejthaniLogo from './VejthaniLogo';
import { 
  Building2, 
  Sparkles, 
  Download, 
  RotateCcw, 
  LayoutGrid, 
  Wand2, 
  ChevronDown, 
  Share2, 
  CheckCircle2,
  TrendingUp,
  Target,
  Hospital
} from 'lucide-react';

export default function Header({
  viewMode,
  setViewMode,
  strategyInfo,
  setStrategyInfo,
  activePreset,
  onOpenPresetModal,
  onOpenCenterModal,
  onOpenExportModal,
  onResetCanvas,
  completionStats
}) {
  const { completedCount, totalBlocks, percent } = completionStats;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      {/* Top Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Vejthani Hospital Logo & 10B Badge */}
          <div className="flex items-center space-x-3.5">
            <VejthaniLogo size="md" />
            <div className="hidden lg:block border-l border-slate-200 pl-3">
              <div className="flex items-center space-x-2">
                <span className="bg-gradient-to-r from-[#00A3AD] to-[#00828A] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  10B Coaching Studio
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Business Model Canvas <span className="text-slate-300">|</span> Alexander Osterwalder
              </p>
            </div>
          </div>

          {/* Center Mode Switcher Tabs */}
          <div className="hidden md:flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setViewMode('wizard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                viewMode === 'wizard'
                  ? 'bg-white text-[#002D62] shadow-sm font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wand2 className="w-4 h-4 text-[#00A3AD]" />
              <span>โหมดโค้ชชิ่งทีละสเต็ป (Wizard)</span>
            </button>

            <button
              onClick={() => setViewMode('canvas')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                viewMode === 'canvas'
                  ? 'bg-white text-[#002D62] shadow-sm font-bold border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-[#002D62]" />
              <span>ผืนผ้าใบ 9 ช่องเต็ม (Full Canvas)</span>
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2">
            
            {/* Center / Clinic Selector Button */}
            <button
              onClick={onOpenCenterModal}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-teal-50 border border-teal-200 hover:bg-teal-100 text-[#00828A] text-xs font-bold transition-colors shadow-sm"
              title="เลือกศูนย์การแพทย์หรือคลินิกเวชธานี"
            >
              <Hospital className="w-3.5 h-3.5 text-[#00A3AD]" />
              <span className="hidden sm:inline">ศูนย์การแพทย์:</span>
              <span className="max-w-[110px] truncate font-extrabold text-[#002D62]">
                {strategyInfo.department || 'ทุกศูนย์ 28+'}
              </span>
              <ChevronDown className="w-3 h-3 text-[#00A3AD]" />
            </button>

            {/* Strategy Preset Selector Button */}
            <button
              onClick={onOpenPresetModal}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors shadow-sm"
              title="เลือกโมเดลยุทธศาสตร์ต้นแบบ"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden md:inline font-bold">โมเดล:</span>
              <span className="max-w-[100px] truncate font-extrabold text-[#002D62]">
                {activePreset?.badge || 'ยุทธศาสตร์'}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {/* Reset Button */}
            <button
              onClick={onResetCanvas}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors border border-transparent hover:border-rose-200"
              title="รีเซ็ตผืนผ้าใบ"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Export High-Res PNG Button */}
            <button
              onClick={onOpenExportModal}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#002D62] hover:bg-[#0B3B7B] text-white text-xs sm:text-sm font-extrabold transition-all shadow-md hover:shadow-lg border border-[#00A3AD]/30"
            >
              <Download className="w-4 h-4 text-[#00A3AD]" />
              <span>ส่งออกภาพ Canvas</span>
            </button>
          </div>

        </div>
      </div>

      {/* Strategy Meta & Completion Bar */}
      <div className="bg-slate-50 border-t border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          
          {/* Editable Strategy Title, Center, & Target */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-1.5 text-slate-500">
              <Target className="w-3.5 h-3.5 text-[#002D62]" />
              <span className="font-bold text-slate-700">ชื่อแผนยุทธศาสตร์:</span>
              <input
                type="text"
                value={strategyInfo.title}
                onChange={(e) => setStrategyInfo({ ...strategyInfo, title: e.target.value })}
                placeholder="ระบุชื่อแผนกลยุทธ์..."
                className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-[#002D62] focus:outline-none focus:ring-1 focus:ring-[#002D62] w-52 sm:w-64"
              />
            </div>

            <div className="flex items-center space-x-1.5 text-slate-500">
              <Building2 className="w-3.5 h-3.5 text-[#00A3AD]" />
              <span className="font-bold text-slate-700">ศูนย์ / แผนก:</span>
              <div 
                onClick={onOpenCenterModal}
                className="bg-white border border-teal-300 hover:border-teal-500 rounded-lg px-2.5 py-1 text-xs text-[#002D62] font-extrabold cursor-pointer flex items-center space-x-1"
                title="คลิกเพื่อเลือกจากรายชื่อศูนย์การแพทย์เวชธานีทั้งหมด"
              >
                <span className="max-w-[160px] truncate">{strategyInfo.department}</span>
                <ChevronDown className="w-3 h-3 text-teal-600" />
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-slate-500">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-bold text-slate-700">เป้าหมาย:</span>
              <input
                type="text"
                value={strategyInfo.targetRevenue}
                onChange={(e) => setStrategyInfo({ ...strategyInfo, targetRevenue: e.target.value })}
                placeholder="เช่น 1,200 ล้านบาท"
                className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs font-bold text-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 w-32"
              />
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-600 font-medium">ความคืบหน้า Canvas:</span>
              <span className="font-extrabold text-slate-900">{completedCount}/{totalBlocks} ช่อง ({percent}%)</span>
            </div>
            <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#00A3AD] to-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
