import { toPng, toJpeg } from 'html-to-image';

export async function generateCanvasDataUrl(nodeElement, options = {}) {
  const {
    format = 'png',
    pixelRatio = 2.5,
    backgroundColor = '#FFFFFF'
  } = options;

  if (!nodeElement) {
    throw new Error('Canvas element not found');
  }

  const exportOptions = {
    quality: 0.98,
    pixelRatio: pixelRatio,
    backgroundColor: backgroundColor,
    cacheBust: true,
    style: {
      transform: 'scale(1)',
      transformOrigin: 'top left',
    },
    filter: (node) => {
      // Exclude interactive buttons marked with 'no-export' during capture
      if (node.classList && node.classList.contains('no-export')) {
        return false;
      }
      return true;
    }
  };

  if (format === 'jpeg' || format === 'jpg') {
    return await toJpeg(nodeElement, exportOptions);
  } else {
    return await toPng(nodeElement, exportOptions);
  }
}

export async function exportCanvasAsImage(nodeElement, options = {}) {
  const {
    format = 'png',
    fileName = 'Vejthani-10B-Business-Model-Canvas',
    pixelRatio = 2.5,
    backgroundColor = '#FFFFFF'
  } = options;

  const dataUrl = await generateCanvasDataUrl(nodeElement, {
    format,
    pixelRatio,
    backgroundColor
  });

  // Trigger browser download
  const link = document.createElement('a');
  link.download = `${fileName}.${format}`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return dataUrl;
}
