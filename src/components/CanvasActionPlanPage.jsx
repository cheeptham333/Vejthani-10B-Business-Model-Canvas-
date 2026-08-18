import React, { forwardRef } from 'react';
import VejthaniLogo from './VejthaniLogo';
import { BMC_BLOCKS } from '../data/bmcBlocks';
import { 
  Building2, 
  Calendar, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Compass, 
  Flag,
  Target,
  Rocket
} from 'lucide-react';

const CanvasActionPlanPage = forwardRef(function CanvasActionPlanPage(
  {
    bmcData,
    strategyInfo
  },
  ref
) {
  // Default Roadmap for Vejthani 10B
  const quarterlyMilestones = [
    {
      quarter: 'ไตรมาสที่ 1 (Q1)',
      title: 'เตรียมความพร้อม & เทคโนโลยีขั้นสูง',
      color: 'border-l-4 border-blue-500 bg-blue-50/50',
      badge: 'bg-blue-600 text-white',
      items: [
        'กำหนดมาตรฐานทางคลินิก JCI CCPC และพัฒนาโปรแกรม Fast-Track',
        'ติดตั้งและอบรมทีมแพทย์ศัลยกรรมหุ่นยนต์ (Da Vinci / Robotic Surgery)',
        'ทบทวนโครงสร้างราคาแพ็กเกจการรักษาแบบเหมาจ่าย (Bundled Pricing)'
      ]
    },
    {
      quarter: 'ไตรมาสที่ 2 (Q2)',
      title: 'ขยายตลาดต่างประเทศ & เครือข่ายส่งต่อ',
      color: 'border-l-4 border-teal-500 bg-teal-50/50',
      badge: 'bg-[#00A3AD] text-white',
      items: [
        'จัด International Medical Roadshow ในกลุ่มประเทศ GCC และ CLMV',
        'ลงนามความร่วมมือ (MOU) กับสถานทูต และสำนักงานตัวแทน VRO ใหม่ 5 แห่ง',
        'เปิดตัว Digital Multilingual Healthcare Portal ภาษาอาหรับและท้องถิ่น'
      ]
    },
    {
      quarter: 'ไตรมาสที่ 3 (Q3)',
      title: 'ยกระดับบริการ VIP & ประกันระหว่างประเทศ',
      color: 'border-l-4 border-amber-500 bg-amber-50/50',
      badge: 'bg-amber-600 text-white',
      items: [
        'เปิดให้บริการ Arabic VIP Concierge Suite และระบบล่ามเฉพาะทาง 24 ชม.',
        'เชื่อมต่อระบบ Direct Billing กับ Top 10 บริษัทประกันสุขภาพระดับโลก',
        'ขยายโปรแกรมสมาชิก Longevity & Preventive Health Club สำหรับผู้บริหาร'
      ]
    },
    {
      quarter: 'ไตรมาสที่ 4 (Q4)',
      title: 'ประเมินผลลัพธ์ & ทะลุเป้าหมาย 10,000 ล้าน',
      color: 'border-l-4 border-emerald-500 bg-emerald-50/50',
      badge: 'bg-emerald-600 text-white',
      items: [
        'ประเมิน Clinical Outcome Benchmarking และความพึงพอใจคนไข้ 98%+',
        'สรุปผลประกอบการตามเป้าหมายรายได้ของศูนย์การแพทย์สู่ระดับหมื่นล้าน',
        'วางแผนขยายศักยภาพเตียงผู้ป่วยและห้องผ่าตัดรองรับการเติบโตในปีถัดไป'
      ]
    }
  ];

  return (
    <div
      ref={ref}
      id="vejthani-bmc-action-plan-page"
      className="bmc-export-container bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm max-w-[1540px] mx-auto min-h-[960px] flex flex-col justify-between"
    >
      {/* Top Header Banner */}
      <div>
        <div className="bg-gradient-to-r from-[#002D62] via-[#072044] to-[#002D62] text-white p-5 sm:p-6 rounded-3xl shadow-lg border border-[#00A3AD]/30 mb-6 relative overflow-hidden">
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Logo & Document Title */}
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2.5 rounded-2xl shadow-md shrink-0 border border-slate-100 flex items-center justify-center">
                <VejthaniLogo size="md" />
              </div>
              <div>
                <div className="flex items-center space-x-2.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    STRATEGIC ACTION PLAN & 10B ROADMAP
                  </span>
                  <span className="bg-gradient-to-r from-[#00A3AD] to-emerald-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                    Page 2 of 2
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-bold text-[#E8D5B5] mt-1">
                  แผนปฏิบัติการเชิงลึกและตัวชี้วัดความสำเร็จ: {strategyInfo.title}
                </h2>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center space-x-2">
                <Building2 className="w-3.5 h-3.5 text-[#00A3AD]" />
                <span className="text-slate-300">ศูนย์/แผนก:</span>
                <span className="font-extrabold text-white">{strategyInfo.department}</span>
              </div>

              <div className="bg-emerald-500/25 backdrop-blur-md px-3.5 py-2 rounded-xl border border-emerald-400/40 flex items-center space-x-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-200">เป้าหมาย:</span>
                <span className="font-black text-emerald-300">{strategyInfo.targetRevenue}</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="text-slate-300">วันที่:</span>
                <span className="font-semibold text-white">
                  {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Section 1: 9-Pillar Strategy Matrix Table */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-[#002D62]" />
            <h3 className="font-extrabold text-sm text-[#002D62] uppercase tracking-wide">
              1. ตารางสรุป 9 มิติยุทธศาสตร์และตัวชี้วัด (Strategic Matrix & KPIs)
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#002D62] text-white font-bold">
                  <th className="py-2.5 px-3.5 w-1/4 border-r border-blue-900">มิติกลยุทธ์ (BMC Pillars)</th>
                  <th className="py-2.5 px-3.5 w-1/2 border-r border-blue-900">มาตรการและข้อสรุปสำคัญ (Key Action Items)</th>
                  <th className="py-2.5 px-3.5 w-1/4">ตัวชี้วัดเป้าหมาย (Key Target KPIs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {BMC_BLOCKS.map((block, idx) => {
                  const items = bmcData[block.id] || [];
                  const kpiSuggestions = {
                    customerSegments: 'ยอดผู้ป่วยต่างชาติ High-Spending โต 25%+',
                    valuePropositions: 'Net Promoter Score (NPS) > 85%, ความพึงพอใจ 98%+',
                    channels: 'จำนวนเคสจาก Overseas Offices โต 30%+',
                    customerRelationships: 'อัตราการบอกต่อและกลับมารักษาซ้ำ > 40%',
                    revenueStreams: `บรรลุเป้าหมายรายได้ ${strategyInfo.targetRevenue}`,
                    keyResources: 'อัตราความพร้อมเครื่องมือแพทย์และหุ่นยนต์ 99%+',
                    keyActivities: 'มาตรฐาน JCI CCPC ต่อเนื่อง, อัตราติดเชื้อ < 0.1%',
                    keyPartnerships: 'สัญญาร่วมสถานทูต & Top Insurers ครบถ้วน',
                    costStructure: 'EBITDA Margin แข็งแกร่ง, คุ้มค่าการลงทุน'
                  };

                  return (
                    <tr key={block.id} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-2 px-3.5 font-bold text-[#002D62] border-r border-slate-200">
                        {block.titleTh}
                      </td>
                      <td className="py-2 px-3.5 border-r border-slate-200">
                        {items.length === 0 ? (
                          <span className="text-slate-400 italic">อยู่ระหว่างระดมสมองของทีมงาน</span>
                        ) : (
                          <ul className="list-disc list-inside space-y-0.5 font-medium">
                            {items.slice(0, 3).map((it, i) => (
                              <li key={i} className="line-clamp-1">
                                {it.text}
                              </li>
                            ))}
                            {items.length > 3 && (
                              <li className="text-[10px] text-slate-400">
                                และอีก {items.length - 3} รายการย่อย
                              </li>
                            )}
                          </ul>
                        )}
                      </td>
                      <td className="py-2 px-3.5 font-semibold text-emerald-800 bg-emerald-50/30">
                        {kpiSuggestions[block.id] || 'ผ่านเกณฑ์มาตรฐานระดับสากล'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Quarterly Implementation Roadmap Q1 - Q4 */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2">
            <Rocket className="w-4 h-4 text-[#002D62]" />
            <h3 className="font-extrabold text-sm text-[#002D62] uppercase tracking-wide">
              2. แผนปฏิบัติการขับเคลื่อนรายไตรมาส (Quarterly Implementation Roadmap: Q1 - Q4)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quarterlyMilestones.map((q, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col justify-between ${q.color}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${q.badge}`}>
                      {q.quarter}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-[#002D62] text-xs leading-snug mb-2">
                    {q.title}
                  </h4>
                  <ul className="space-y-1.5 text-[11px] text-slate-600 font-medium">
                    {q.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-1.5 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Approval Sign-off Box */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 grid grid-cols-3 gap-4 text-center text-xs text-slate-600">
          <div className="border-r border-slate-100 pr-4">
            <span className="font-bold text-slate-800 block mb-6">ผู้จัดทำแผนยุทธศาสตร์ (Facilitator)</span>
            <div className="border-b border-dashed border-slate-300 w-3/4 mx-auto mb-1"></div>
            <span>{strategyInfo.facilitator || 'ทีมพัฒนาธุรกิจและการแพทย์'}</span>
          </div>
          <div className="border-r border-slate-100 pr-4">
            <span className="font-bold text-slate-800 block mb-6">ผู้อำนวยการศูนย์การแพทย์ (Center Director)</span>
            <div className="border-b border-dashed border-slate-300 w-3/4 mx-auto mb-1"></div>
            <span>....................................................................</span>
          </div>
          <div>
            <span className="font-bold text-slate-800 block mb-6">ผู้บริหารระดับสูง (Chief Executive Officer)</span>
            <div className="border-b border-dashed border-slate-300 w-3/4 mx-auto mb-1"></div>
            <span>โรงพยาบาลเวชธานี อินเตอร์เนชันแนล</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center space-x-2 flex-wrap">
          <span className="font-extrabold text-[#002D62]">โรงพยาบาลเวชธานี อินเตอร์เนชันแนล</span>
          <span>•</span>
          <span className="font-semibold text-slate-600">Executive Strategy & Action Plan Document</span>
          <span>•</span>
          <span className="text-[#00A3AD] font-bold">Confidential</span>
        </div>
        <div className="text-[11px] text-slate-500 font-bold">
          หน้า 2 จาก 2 (Page 2 of 2)
        </div>
      </div>

    </div>
  );
});

export default CanvasActionPlanPage;
