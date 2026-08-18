import React, { useState, useEffect } from 'react';
import { generateCanvasDataUrl, exportCanvasAsImage } from '../utils/exportCanvas';
import { exportTwoPagePdf } from '../utils/exportPdf';
import { 
  X, 
  Download, 
  Image, 
  Check, 
  AlertCircle, 
  Sparkles, 
  Printer, 
  ExternalLink, 
  Copy,
  RefreshCw,
  Eye,
  FileText,
  Layers,
  FileCheck
} from 'lucide-react';

export default function ExportModal({
  isOpen,
  onClose,
  canvasRef,
  actionPlanRef,
  strategyTitle = 'Vejthani-10B-BMC'
}) {
  // 'pdf' (2-Page Executive Report) vs 'image' (PNG/JPG)
  const [exportType, setExportType] = useState('pdf'); 

  // Image format
  const [format, setFormat] = useState('png');
  const [qualityLevel, setQualityLevel] = useState('high'); // 'standard' (1.5x), 'high' (2.2x), 'ultra' (3.5x)
  const [fileName, setFileName] = useState(
    `Vejthani-10B-Executive-Report-${strategyTitle.replace(/[^a-zA-Z0-9ก-๙]/g, '_')}`
  );
  
  // Previews
  const [previewPage1, setPreviewPage1] = useState('');
  const [previewPage2, setPreviewPage2] = useState('');
  const [previewActiveTab, setPreviewActiveTab] = useState('page1'); // 'page1' | 'page2'
  
  const [isLoadingPreview, setIsLoadingPreview] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const getPixelRatio = () => {
    switch (qualityLevel) {
      case 'ultra':
        return 3.5;
      case 'high':
        return 2.2;
      default:
        return 1.5;
    }
  };

  // Generate Image Previews for both Page 1 & Page 2
  const loadPreviews = async () => {
    if (!isOpen) return;
    setIsLoadingPreview(true);
    try {
      await new Promise((r) => setTimeout(r, 120));
      
      if (canvasRef.current) {
        const url1 = await generateCanvasDataUrl(canvasRef.current, {
          format: 'jpeg',
          pixelRatio: 1.6,
          backgroundColor: '#FFFFFF'
        });
        setPreviewPage1(url1);
      }

      if (actionPlanRef?.current) {
        const url2 = await generateCanvasDataUrl(actionPlanRef.current, {
          format: 'jpeg',
          pixelRatio: 1.6,
          backgroundColor: '#FFFFFF'
        });
        setPreviewPage2(url2);
      }
    } catch (err) {
      console.error('Failed to generate preview:', err);
    } finally {
      setIsLoadingPreview(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setFileName(`Vejthani-10B-Report-${strategyTitle.replace(/[^a-zA-Z0-9ก-๙]/g, '_')}`);
      loadPreviews();
    } else {
      setPreviewPage1('');
      setPreviewPage2('');
      setExportSuccess(false);
      setCopySuccess(false);
    }
  }, [isOpen, format, qualityLevel]);

  if (!isOpen) return null;

  // Handle PDF Export (2 Pages)
  const handleDownloadPdf = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    setExportSuccess(false);

    try {
      await exportTwoPagePdf(canvasRef.current, actionPlanRef?.current, {
        fileName: fileName.trim() || 'Vejthani-10B-Executive-Report',
        pixelRatio: getPixelRatio()
      });
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3500);
    } catch (err) {
      console.error('PDF export failed:', err);
      alert('เกิดข้อผิดพลาดในการสร้างเอกสาร PDF กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsExporting(false);
    }
  };

  // Handle Image Export (Page 1 Canvas)
  const handleDownloadImage = async () => {
    if (!canvasRef.current) return;
    setIsExporting(true);
    setExportSuccess(false);

    try {
      await exportCanvasAsImage(canvasRef.current, {
        format,
        fileName: fileName.trim() || 'Vejthani-10B-BMC',
        pixelRatio: getPixelRatio(),
        backgroundColor: '#FFFFFF'
      });
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (err) {
      console.error('Image export failed:', err);
      alert('เกิดข้อผิดพลาดในการส่งออกภาพ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsExporting(false);
    }
  };

  const handleOpenInNewTab = () => {
    const urlToShow = previewActiveTab === 'page1' ? previewPage1 : previewPage2;
    if (urlToShow) {
      const win = window.open();
      if (win) {
        win.document.write(`<title>${fileName}</title><body style="margin:0;background:#1e293b;display:flex;justify-content:center;padding:20px;"><img src="${urlToShow}" style="max-width:100%;height:auto;box-shadow:0 10px 30px rgba(0,0,0,0.5);border-radius:8px;"/></body>`);
      }
    }
  };

  const handleCopyImage = async () => {
    const urlToCopy = previewActiveTab === 'page1' ? previewPage1 : previewPage2;
    if (!urlToCopy) return;
    try {
      const res = await fetch(urlToCopy);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch (err) {
      console.error('Failed to copy image:', err);
      alert('เบราว์เซอร์ไม่อนุญาตให้คัดลอกรูปภาพ กรุณาใช้ปุ่มดาวน์โหลดแทนครับ');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const activePreviewUrl = previewActiveTab === 'page1' ? previewPage1 : previewPage2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-200 my-6 flex flex-col max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4.5 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-[#002D62] via-[#0B2545] to-[#002D62] text-white">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center border border-[#00A3AD]/40 text-2xl shadow-inner">
              📄
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-extrabold text-white">
                  ส่งออกเอกสาร Business Model Canvas
                </h3>
                <span className="bg-[#00A3AD] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  PDF & High-Res Image
                </span>
              </div>
              <p className="text-xs text-[#E8D5B5] font-medium mt-0.5">
                เลือกส่งออกเป็นไฟล์ PDF 2 หน้า (Executive Report) หรือไฟล์รูปภาพ PNG คมชัดสูง
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

        {/* Format Selection Tab Bar (PDF vs Image) */}
        <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setExportType('pdf')}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                exportType === 'pdf'
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#00A3AD]" />
              <span>📑 เอกสาร PDF 2 หน้า (Executive Report - แนะนำ)</span>
            </button>

            <button
              onClick={() => setExportType('image')}
              className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                exportType === 'image'
                  ? 'bg-[#002D62] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Image className="w-3.5 h-3.5 text-amber-500" />
              <span>🖼️ ไฟล์รูปภาพ (PNG / JPEG)</span>
            </button>
          </div>

          {/* Page switch selector for PDF preview */}
          {exportType === 'pdf' && (
            <div className="hidden sm:flex items-center space-x-1 text-xs bg-white px-2 py-1 rounded-lg border border-slate-200">
              <span className="text-slate-500 font-medium">ดูหน้า:</span>
              <button
                onClick={() => setPreviewActiveTab('page1')}
                className={`px-2 py-0.5 rounded font-bold transition-colors ${
                  previewActiveTab === 'page1'
                    ? 'bg-teal-50 text-[#00828A] border border-teal-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                หน้า 1 (Canvas)
              </button>
              <button
                onClick={() => setPreviewActiveTab('page2')}
                className={`px-2 py-0.5 rounded font-bold transition-colors ${
                  previewActiveTab === 'page2'
                    ? 'bg-teal-50 text-[#00828A] border border-teal-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                หน้า 2 (Action Plan)
              </button>
            </div>
          )}
        </div>

        {/* Modal Body: Previews & Settings */}
        <div className="p-6 overflow-y-auto space-y-5 bg-slate-50 flex-1">
          
          {/* Live Preview Screen */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-[#00A3AD]" />
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                  {exportType === 'pdf'
                    ? `ตัวอย่างเอกสาร PDF [${previewActiveTab === 'page1' ? 'หน้าที่ 1: ผืนผ้าใบ Canvas 9 ช่อง' : 'หน้าที่ 2: แผนปฏิบัติการ Action Plan & Roadmap'}]`
                    : 'ตัวอย่างรูปภาพจริง (Live Image Preview)'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={loadPreviews}
                  disabled={isLoadingPreview}
                  className="flex items-center space-x-1 text-xs text-[#002D62] font-semibold hover:underline"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoadingPreview ? 'animate-spin' : ''}`} />
                  <span>รีเฟรชตัวอย่าง</span>
                </button>
                {activePreviewUrl && (
                  <button
                    type="button"
                    onClick={handleOpenInNewTab}
                    className="flex items-center space-x-1 text-xs text-[#00A3AD] font-bold hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>เปิดภาพเต็ม</span>
                  </button>
                )}
              </div>
            </div>

            <div className="relative bg-slate-900/90 rounded-2xl p-3 sm:p-4 border border-slate-700 min-h-[220px] flex items-center justify-center overflow-hidden shadow-inner">
              {isLoadingPreview ? (
                <div className="flex flex-col items-center justify-center text-white space-y-2 py-10">
                  <div className="w-8 h-8 border-3 border-[#00A3AD] border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-semibold text-slate-300">กำลังประมวลผลตัวอย่างเอกสาร...</span>
                </div>
              ) : activePreviewUrl ? (
                <div className="w-full flex justify-center">
                  <img
                    src={activePreviewUrl}
                    alt="Preview"
                    className="max-h-[360px] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10 hover:scale-[1.01] transition-transform cursor-pointer"
                    onClick={handleOpenInNewTab}
                    title="คลิกเพื่อดูภาพขนาดใหญ่"
                  />
                </div>
              ) : (
                <div className="text-center py-10 text-slate-400">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                  <p className="text-xs">กำลังเตรียมการสร้างเอกสาร กรุณากดปุ่มรีเฟรช</p>
                </div>
              )}
            </div>

            {/* Mobile / Inline Page Switcher */}
            {exportType === 'pdf' && (
              <div className="flex sm:hidden items-center justify-center space-x-2 pt-1">
                <button
                  onClick={() => setPreviewActiveTab('page1')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    previewActiveTab === 'page1' ? 'bg-[#002D62] text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  หน้า 1: Canvas
                </button>
                <button
                  onClick={() => setPreviewActiveTab('page2')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    previewActiveTab === 'page2' ? 'bg-[#002D62] text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  หน้า 2: Action Plan
                </button>
              </div>
            )}
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            
            {/* File Name */}
            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700">
                ชื่อไฟล์ (File Name):
              </label>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#002D62] outline-none font-medium"
              />
            </div>

            {/* Resolution Scale */}
            <div className="space-y-1.5 sm:col-span-1">
              <label className="block text-xs font-bold text-slate-700">
                ความละเอียดเอกสาร:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'standard', label: '1.5x HD' },
                  { id: 'high', label: '2.2x High' },
                  { id: 'ultra', label: '3.5x 4K' },
                ].map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setQualityLevel(q.id)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all text-xs ${
                      qualityLevel === q.id
                        ? 'bg-teal-50 border-[#00A3AD] ring-1 ring-[#00A3AD] font-extrabold text-[#002D62] shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Feature Highlights Alert */}
          {exportType === 'pdf' ? (
            <div className="p-3.5 bg-teal-50/70 rounded-2xl border border-teal-200 text-xs text-teal-950 flex items-start space-x-2.5">
              <FileCheck className="w-4 h-4 text-[#00A3AD] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#006066]">โครงสร้างรายงาน PDF 2 หน้า (Executive Hybrid Report):</span>
                <ul className="mt-1 space-y-0.5 text-teal-900 list-disc list-inside">
                  <li><strong>หน้า 1:</strong> ผืนผ้าใบ BMC 9 ช่องเต็มแผ่นแนวนอน พร้อมแบนเนอร์เวชธานีและเป้าหมายรายได้</li>
                  <li><strong>หน้า 2:</strong> ตารางแจกแจงกลยุทธ์ทั้ง 9 ด้าน, ตัวชี้วัด KPIs, แผนงานรายไตรมาส (Q1-Q4), และช่องลงนามอนุมัติ</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="p-3.5 bg-blue-50/70 rounded-2xl border border-blue-200 text-xs text-blue-950 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-[#00A3AD] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#002D62]">วิธีนำภาพไปใช้งาน:</span>
                <p className="mt-0.5 text-blue-900 leading-relaxed">
                  กดปุ่ม <strong>"ดาวน์โหลดรูปภาพ"</strong> เพื่อเซฟไฟล์ภาพ หรือกด <strong>"คัดลอกรูปภาพ"</strong> เพื่อไป Paste ใน PowerPoint, LINE หรืออีเมลได้ทันที
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Actions */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyImage}
              disabled={!activePreviewUrl}
              className={`flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold rounded-xl transition-all border ${
                copySuccess
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {copySuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>คัดลอกภาพแล้ว!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>คัดลอกรูปภาพ (Copy)</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>สั่งพิมพ์ (Print)</span>
            </button>
          </div>

          <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
            >
              ปิด
            </button>

            {exportType === 'pdf' ? (
              <button
                type="button"
                disabled={isExporting}
                onClick={handleDownloadPdf}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white transition-all shadow-md ${
                  exportSuccess
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-[#002D62] hover:bg-[#0B3B7B] disabled:opacity-50'
                }`}
              >
                {isExporting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>กำลังสร้างเอกสาร PDF 2 หน้า...</span>
                  </>
                ) : exportSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ดาวน์โหลด PDF สำเร็จแล้ว!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#00A3AD]" />
                    <span>📥 ดาวน์โหลดไฟล์ PDF (2 หน้า)</span>
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                disabled={isExporting}
                onClick={handleDownloadImage}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white transition-all shadow-md ${
                  exportSuccess
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-[#002D62] hover:bg-[#0B3B7B] disabled:opacity-50'
                }`}
              >
                {isExporting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>กำลังบันทึกภาพ...</span>
                  </>
                ) : exportSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ดาวน์โหลดภาพสำเร็จแล้ว!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#00A3AD]" />
                    <span>📥 ดาวน์โหลดรูปภาพ ({format.toUpperCase()})</span>
                  </>
                )}
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
