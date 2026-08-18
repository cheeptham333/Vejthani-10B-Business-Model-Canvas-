import { jsPDF } from 'jspdf';
import { generateCanvasDataUrl } from './exportCanvas';

export async function exportTwoPagePdf(page1Element, page2Element, options = {}) {
  const {
    fileName = 'Vejthani-10B-Executive-Report',
    pixelRatio = 2.2
  } = options;

  if (!page1Element) {
    throw new Error('Page 1 Canvas element not found');
  }

  // 1. Initialize jsPDF in Landscape A4 (297mm x 210mm)
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = 297;
  const pageHeight = 210;

  // 2. Render Page 1 (9-Box BMC Grid)
  const page1ImgData = await generateCanvasDataUrl(page1Element, {
    format: 'jpeg',
    pixelRatio: pixelRatio,
    backgroundColor: '#FFFFFF'
  });

  pdf.addImage(page1ImgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');

  // 3. Render Page 2 (Action Plan & Roadmap) if provided
  if (page2Element) {
    pdf.addPage('a4', 'landscape');
    const page2ImgData = await generateCanvasDataUrl(page2Element, {
      format: 'jpeg',
      pixelRatio: pixelRatio,
      backgroundColor: '#FFFFFF'
    });
    pdf.addImage(page2ImgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');
  }

  // 4. Save and download the PDF file directly
  pdf.save(`${fileName}.pdf`);

  return pdf;
}
