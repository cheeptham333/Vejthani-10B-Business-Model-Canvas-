import React from 'react';
import { STRATEGY_PRESETS } from '../data/strategyPresets';
import { X, Sparkles, Check, TrendingUp, Users, ArrowRight, Building2 } from 'lucide-react';

export default function PresetModal({
  isOpen,
  onClose,
  activePresetId,
  onSelectPreset
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-200 my-8">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-[#002D62] via-[#0B2545] to-[#002D62] text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-[#00A3AD]/40 text-xl">
              🎯
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                เลือกโมเดลยุทธศาสตร์ต้นแบบ (Strategic Blueprints)
              </h2>
              <p className="text-xs text-[#E8D5B5] font-medium">
                โมเดลกลยุทธ์เพิ่มรายได้ 10,000 ล้านบาท สำหรับทีมงานโรงพยาบาลเวชธานี
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Cards List */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto bg-slate-50">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STRATEGY_PRESETS.map((preset) => {
              const isSelected = activePresetId === preset.id;
              const totalItems = Object.values(preset.data).reduce((acc, arr) => acc + arr.length, 0);

              return (
                <div
                  key={preset.id}
                  className={`bg-white rounded-2xl p-5 border-2 transition-all duration-200 flex flex-col justify-between hover:shadow-lg ${
                    isSelected
                      ? 'border-[#002D62] ring-2 ring-[#002D62]/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Badge & Target */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${preset.badgeColor}`}>
                        {preset.badge}
                      </span>
                      <div className="flex items-center space-x-1 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{preset.targetRevenue}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-extrabold text-[#002D62] text-base leading-snug">
                      {preset.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                      {preset.subtitle}
                    </p>

                    {/* Department badge */}
                    {preset.department && (
                      <div className="flex items-center space-x-1.5 text-xs text-[#00828A] font-bold mt-2 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 w-fit">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{preset.department}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      {preset.description}
                    </p>
                  </div>

                  {/* Footer & Select Button */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {totalItems > 0 ? `${totalItems} รายการครอบคลุม 9 ช่อง` : 'ผืนผ้าใบเริ่มต้นแบบเปิด'}
                    </span>

                    <button
                      onClick={() => {
                        onSelectPreset(preset);
                        onClose();
                      }}
                      className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                        isSelected
                          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                          : 'bg-[#002D62] text-white hover:bg-[#00A3AD]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>กำลังใช้งาน</span>
                        </>
                      ) : (
                        <>
                          <span>โหลดเทมเพลตนี้</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>* การโหลดเทมเพลตจะแทนที่ข้อมูลบน Canvas ปัจจุบัน</span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
          >
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
}
