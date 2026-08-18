import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import GuidedWizard from './components/GuidedWizard';
import CanvasGrid from './components/CanvasGrid';
import CanvasActionPlanPage from './components/CanvasActionPlanPage';
import PresetModal from './components/PresetModal';
import CenterSelectorModal from './components/CenterSelectorModal';
import ExportModal from './components/ExportModal';
import StickyNoteModal from './components/StickyNoteModal';
import { BMC_BLOCKS } from './data/bmcBlocks';
import { STRATEGY_PRESETS } from './data/strategyPresets';
import { Wand2, LayoutGrid, Sparkles, Download, Hospital, FileText } from 'lucide-react';

const STORAGE_KEY_BMC = 'vejthani_10b_bmc_data_v2';
const STORAGE_KEY_META = 'vejthani_10b_meta_v2';

export default function App() {
  const canvasRef = useRef(null);
  const actionPlanRef = useRef(null);

  // Initial preset (Defaults to International Medical Tourism or Da Vinci)
  const defaultPreset = STRATEGY_PRESETS[0];

  // Canvas 9-box Data State
  const [bmcData, setBmcData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_BMC);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved BMC data', e);
      }
    }
    return defaultPreset.data;
  });

  // Strategy Meta info state
  const [strategyInfo, setStrategyInfo] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_META);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved meta info', e);
      }
    }
    return {
      title: 'แผนกลยุทธ์ยกระดับรายได้สู่เป้าหมาย 10,000 ล้านบาท',
      department: 'ศูนย์กระดูกและข้อ (Orthopedics Center - King of Bones)',
      targetRevenue: '2,500 ล้านบาท / ปี',
      facilitator: 'ทีมพัฒนาธุรกิจและการแพทย์ เวชธานี'
    };
  });

  // Active preset
  const [activePreset, setActivePreset] = useState(defaultPreset);

  // Wizard vs Canvas view mode
  const [viewMode, setViewMode] = useState('wizard'); // 'wizard' | 'canvas'

  // Wizard current step (1 to 9)
  const [currentStep, setCurrentStep] = useState(1);

  // Modals state
  const [isPresetModalOpen, setIsPresetModalOpen] = useState(false);
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Sticky note add/edit modal state
  const [stickyModal, setStickyModal] = useState({
    isOpen: false,
    blockId: null,
    itemIndex: null,
    initialText: '',
    initialColor: 'yellow',
    blockTitle: ''
  });

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_BMC, JSON.stringify(bmcData));
  }, [bmcData]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_META, JSON.stringify(strategyInfo));
  }, [strategyInfo]);

  // Calculate completion stats (how many of the 9 blocks have at least 1 item)
  const calculateCompletionStats = () => {
    const totalBlocks = BMC_BLOCKS.length;
    let completedCount = 0;
    BMC_BLOCKS.forEach((block) => {
      if (bmcData[block.id] && bmcData[block.id].length > 0) {
        completedCount += 1;
      }
    });
    const percent = Math.round((completedCount / totalBlocks) * 100);
    return { completedCount, totalBlocks, percent };
  };

  // Add Note Handler
  const handleAddNote = (blockId, noteData = null) => {
    if (noteData && noteData.text) {
      setBmcData((prev) => ({
        ...prev,
        [blockId]: [
          ...(prev[blockId] || []),
          {
            id: Date.now().toString(),
            text: noteData.text,
            color: noteData.color || 'yellow'
          }
        ]
      }));
    } else {
      // Open modal to enter note
      const block = BMC_BLOCKS.find((b) => b.id === blockId);
      setStickyModal({
        isOpen: true,
        blockId,
        itemIndex: null,
        initialText: '',
        initialColor: 'yellow',
        blockTitle: block ? `${block.titleTh} (${block.titleEn})` : ''
      });
    }
  };

  // Edit Note Handler
  const handleEditNote = (blockId, index, currentItem) => {
    const block = BMC_BLOCKS.find((b) => b.id === blockId);
    setStickyModal({
      isOpen: true,
      blockId,
      itemIndex: index,
      initialText: currentItem.text,
      initialColor: currentItem.color || 'yellow',
      blockTitle: block ? `${block.titleTh} (${block.titleEn})` : ''
    });
  };

  // Delete Note Handler
  const handleDeleteNote = (blockId, index) => {
    setBmcData((prev) => {
      const currentList = prev[blockId] || [];
      const updatedList = currentList.filter((_, i) => i !== index);
      return {
        ...prev,
        [blockId]: updatedList
      };
    });
  };

  // Save from StickyModal
  const handleSaveStickyModal = ({ text, color }) => {
    const { blockId, itemIndex } = stickyModal;
    if (!blockId) return;

    setBmcData((prev) => {
      const currentList = prev[blockId] || [];
      if (itemIndex !== null && itemIndex >= 0) {
        // Edit existing
        const updatedList = [...currentList];
        updatedList[itemIndex] = {
          ...updatedList[itemIndex],
          text,
          color
        };
        return {
          ...prev,
          [blockId]: updatedList
        };
      } else {
        // Add new
        return {
          ...prev,
          [blockId]: [
            ...currentList,
            {
              id: Date.now().toString(),
              text,
              color
            }
          ]
        };
      }
    });
  };

  // Select Strategy Preset Handler
  const handleSelectPreset = (preset) => {
    setActivePreset(preset);
    setBmcData(preset.data);
    setStrategyInfo((prev) => ({
      ...prev,
      title: preset.title,
      department: preset.department || prev.department,
      targetRevenue: preset.targetRevenue
    }));
  };

  // Select Medical Center Handler (From 28+ Vejthani Centers)
  const handleSelectCenter = (center) => {
    setStrategyInfo((prev) => ({
      ...prev,
      department: center.nameTh,
      targetRevenue: center.targetRevenue,
      title: `แผนกลยุทธ์เพิ่มรายได้: ${center.nameTh.split('(')[0].trim()}`
    }));
  };

  // Reset Canvas Handler
  const handleResetCanvas = () => {
    if (window.confirm('คุณต้องการล้างข้อมูลทั้งหมดบนผืนผ้าใบเพื่อเริ่มต้นใหม่ใช่หรือไม่?')) {
      const emptyData = {};
      BMC_BLOCKS.forEach((block) => {
        emptyData[block.id] = [];
      });
      setBmcData(emptyData);
      setActivePreset(STRATEGY_PRESETS[STRATEGY_PRESETS.length - 1]); // Custom
    }
  };

  // Jump to specific step in wizard
  const handleJumpToWizard = (stepNumber) => {
    setCurrentStep(stepNumber);
    setViewMode('wizard');
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 flex flex-col font-sans">
      
      {/* Top Header */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        strategyInfo={strategyInfo}
        setStrategyInfo={setStrategyInfo}
        activePreset={activePreset}
        onOpenPresetModal={() => setIsPresetModalOpen(true)}
        onOpenCenterModal={() => setIsCenterModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onResetCanvas={handleResetCanvas}
        completionStats={calculateCompletionStats()}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {viewMode === 'wizard' ? (
          <GuidedWizard
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            bmcData={bmcData}
            strategyInfo={strategyInfo}
            onAddNote={handleAddNote}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
            onSwitchToCanvas={() => setViewMode('canvas')}
            onOpenExportModal={() => setIsExportModalOpen(true)}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            
            {/* Quick Banner for Canvas Mode */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A3AD]/10 text-[#00A3AD] flex items-center justify-center font-bold text-lg">
                  📊
                </div>
                <div>
                  <h3 className="font-extrabold text-[#002D62] text-sm">
                    ผืนผ้าใบ Business Model Canvas 9 ช่อง (Alexander Osterwalder)
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    คลิกที่แต่ละช่องเพื่อเพิ่ม/แก้ไข Sticky Notes หรือเปลี่ยนศูนย์การแพทย์เพื่อตั้งเป้าหมายรายได้
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end flex-wrap gap-2">
                <button
                  onClick={() => setIsCenterModalOpen(true)}
                  className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-[#00828A] bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-colors"
                >
                  <Hospital className="w-3.5 h-3.5 text-[#00A3AD]" />
                  <span>เปลี่ยนศูนย์การแพทย์</span>
                </button>

                <button
                  onClick={() => setViewMode('wizard')}
                  className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  <Wand2 className="w-3.5 h-3.5 text-[#00A3AD]" />
                  <span>โหมดโค้ชชิ่ง (Wizard)</span>
                </button>

                <button
                  onClick={() => setIsExportModalOpen(true)}
                  className="flex items-center space-x-1.5 px-4 py-2 text-xs font-extrabold text-white bg-[#002D62] hover:bg-[#0B3B7B] rounded-xl transition-all shadow-sm border border-[#00A3AD]/30"
                >
                  <Download className="w-3.5 h-3.5 text-[#00A3AD]" />
                  <span>📑 ส่งออก PDF 2 หน้า / รูปภาพ</span>
                </button>
              </div>
            </div>

            {/* The 9-Box Osterwalder Canvas Grid (Page 1) */}
            <CanvasGrid
              ref={canvasRef}
              bmcData={bmcData}
              strategyInfo={strategyInfo}
              onAddNote={handleAddNote}
              onEditNote={handleEditNote}
              onDeleteNote={handleDeleteNote}
              onJumpToWizard={handleJumpToWizard}
              onOpenCenterModal={() => setIsCenterModalOpen(true)}
            />

          </div>
        )}
      </main>

      {/* Off-screen capture containers: Fully laid out with 1440px width so jsPDF can capture Page 1 & Page 2 crisp & sharp in any view mode */}
      <div 
        style={{ 
          position: 'fixed', 
          left: '-9999px', 
          top: '0', 
          width: '1440px', 
          zIndex: -999, 
          pointerEvents: 'none',
          opacity: 0
        }}
        aria-hidden="true"
      >
        {/* Page 1 (Canvas Grid) */}
        {viewMode === 'wizard' && (
          <CanvasGrid
            ref={canvasRef}
            bmcData={bmcData}
            strategyInfo={strategyInfo}
            onAddNote={handleAddNote}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
            onJumpToWizard={handleJumpToWizard}
            onOpenCenterModal={() => setIsCenterModalOpen(true)}
          />
        )}

        {/* Page 2 (Action Plan & Roadmap Page) */}
        <CanvasActionPlanPage
          ref={actionPlanRef}
          bmcData={bmcData}
          strategyInfo={strategyInfo}
        />
      </div>

      {/* Center / Clinic Selector Modal (28+ Centers) */}
      <CenterSelectorModal
        isOpen={isCenterModalOpen}
        onClose={() => setIsCenterModalOpen(false)}
        currentDepartment={strategyInfo.department}
        onSelectCenter={handleSelectCenter}
      />

      {/* Strategy Presets Modal */}
      <PresetModal
        isOpen={isPresetModalOpen}
        onClose={() => setIsPresetModalOpen(false)}
        activePresetId={activePreset?.id}
        onSelectPreset={handleSelectPreset}
      />

      {/* High-Res Export & Visual Viewer Modal (PDF & Image) */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        canvasRef={canvasRef}
        actionPlanRef={actionPlanRef}
        strategyTitle={strategyInfo.title}
      />

      {/* Sticky Note Modal */}
      <StickyNoteModal
        isOpen={stickyModal.isOpen}
        onClose={() => setStickyModal((prev) => ({ ...prev, isOpen: false }))}
        onSave={handleSaveStickyModal}
        onDelete={
          stickyModal.itemIndex !== null
            ? () => handleDeleteNote(stickyModal.blockId, stickyModal.itemIndex)
            : null
        }
        initialText={stickyModal.initialText}
        initialColor={stickyModal.initialColor}
        blockTitle={stickyModal.blockTitle}
      />

    </div>
  );
}
