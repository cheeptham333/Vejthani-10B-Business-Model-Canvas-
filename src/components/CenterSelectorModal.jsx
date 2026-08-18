import React, { useState } from 'react';
import { VEJTHANI_CENTERS_DATA } from '../data/vejthaniCenters';
import { X, Search, Building2, TrendingUp, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function CenterSelectorModal({
  isOpen,
  onClose,
  currentDepartment,
  onSelectCenter
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!isOpen) return null;

  // Filter centers
  const filteredData = VEJTHANI_CENTERS_DATA.map((cat) => {
    const matchingCenters = cat.centers.filter((c) => {
      const matchSearch =
        searchTerm === '' ||
        c.nameTh.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.highlights.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCat =
        selectedCategory === 'all' || cat.category === selectedCategory;

      return matchSearch && matchCat;
    });

    return {
      ...cat,
      centers: matchingCenters
    };
  }).filter((cat) => cat.centers.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-200 my-6 flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-[#002D62] via-[#0B2545] to-[#002D62] text-white">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center border border-[#00A3AD]/40 text-2xl shadow-inner">
              🏥
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  เลือกศูนย์การแพทย์ / คลินิก โรงพยาบาลเวชธานี
                </h2>
                <span className="bg-[#00A3AD] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  28+ Centers
                </span>
              </div>
              <p className="text-xs text-[#E8D5B5] font-medium mt-0.5">
                เลือกศูนย์เพื่อตั้งค่าเป้าหมายรายได้และนำทางความคิด Business Model Canvas (BMC)
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

        {/* Search & Filter Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ค้นหาชื่อศูนย์, คลินิก, เทคโนโลยี เช่น Da Vinci, กระดูก, หัวใจ, มะเร็ง..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#002D62] outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ล้าง
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              ทุกหมวดหมู่
            </button>
            {VEJTHANI_CENTERS_DATA.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-[#002D62] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.category.split('(')[0].trim()}
              </button>
            ))}
          </div>

        </div>

        {/* Centers Grid Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto bg-slate-100/60">
          
          {filteredData.length === 0 ? (
            <div className="py-16 text-center">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-600 font-semibold text-sm">
                ไม่พบศูนย์หรือคลินิกที่ตรงกับคำค้นหา "{searchTerm}"
              </p>
              <p className="text-slate-400 text-xs mt-1">
                ลองพิมพ์คำค้นอื่น เช่น ข้อเข่า, สันหลัง, หุ่นยนต์, Q-Life
              </p>
            </div>
          ) : (
            filteredData.map((catGroup, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A3AD]" />
                  <h3 className="font-extrabold text-[#002D62] text-sm uppercase tracking-wide">
                    {catGroup.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {catGroup.centers.map((c) => {
                    const isCurrent = currentDepartment === c.nameTh;

                    return (
                      <div
                        key={c.id}
                        onClick={() => {
                          onSelectCenter(c);
                          onClose();
                        }}
                        className={`bg-white rounded-2xl p-4 border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-md hover:border-[#002D62] group ${
                          isCurrent
                            ? 'border-[#002D62] ring-2 ring-[#002D62]/20 bg-blue-50/30'
                            : 'border-slate-200 hover:scale-[1.01]'
                        }`}
                      >
                        <div>
                          {/* Top Badge & Target */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${c.badgeColor}`}>
                              {c.badge}
                            </span>
                            <div className="flex items-center space-x-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              <TrendingUp className="w-3 h-3" />
                              <span>{c.targetRevenue}</span>
                            </div>
                          </div>

                          {/* Center Name */}
                          <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-[#002D62] transition-colors leading-snug">
                            {c.nameTh}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                            {c.nameEn}
                          </p>

                          {/* Highlights */}
                          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed bg-slate-50 p-2 rounded-lg border border-slate-100">
                            {c.highlights}
                          </p>
                        </div>

                        {/* Action select */}
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-semibold text-slate-400">
                            คลิกเพื่อเลือกศูนย์นี้
                          </span>

                          <button
                            type="button"
                            className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                              isCurrent
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#002D62] text-white group-hover:bg-[#00A3AD]'
                            }`}
                          >
                            {isCurrent ? (
                              <>
                                <Check className="w-3 h-3" />
                                <span>กำลังเลือกอยู่</span>
                              </>
                            ) : (
                              <>
                                <span>เลือกศูนย์นี้</span>
                                <ChevronRight className="w-3 h-3" />
                              </>
                            )}
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>* การเลือกศูนย์จะอัปเดตชื่อแผนกและเป้าหมายรายได้ของ Business Model Canvas</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
          >
            ปิด
          </button>
        </div>

      </div>
    </div>
  );
}
