// frontend/src/app/components/ResultView.tsx
"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResultView({ result, onRestart }: { result: any; onRestart: () => void }) {
  const answer = result?.answer || result?.data?.answer || "";

  const downloadPDF = async () => {
    const el = document.getElementById("result-root");
    if (!el) return;
    
    try {
      const canvas = await html2canvas(el, {
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
        scale: 2, // <-- RE-ENABLED for sharp text
        
        onclone: (clonedDoc) => {
          const clonedRoot = clonedDoc.getElementById("result-root");
          if (!clonedRoot) return;
          
          // 1. Nuke stylesheets
          clonedDoc.querySelectorAll('style, link[rel="stylesheet"]').forEach(styleEl => {
            styleEl.remove();
          });
          
          // 2. Force width on root
          (clonedRoot as HTMLElement).style.width = "800px";
          (clonedRoot as HTMLElement).style.boxSizing = "border-box";
          (clonedRoot as HTMLElement).style.fontFamily = "Arial, sans-serif"; // Base font
          
          // 3. Walk all child elements
          const walker = clonedDoc.createTreeWalker(
            clonedRoot,
            NodeFilter.SHOW_ELEMENT
          );
          
          let node;
          while ((node = walker.nextNode())) {
            const elem = node as HTMLElement;
            const tagName = elem.tagName.toLowerCase();
            
            // Wipe all styling attributes
            elem.removeAttribute("class");
            elem.removeAttribute("data-theme");
            elem.removeAttribute("style");
            
            // Apply universal safe styles
            elem.style.color = "#000000";
            elem.style.backgroundColor = "transparent"; // Let root bg show
            elem.style.border = "none";
            elem.style.textDecoration = "none";
            elem.style.boxShadow = "none";
            elem.style.overflow = "visible";
            elem.style.whiteSpace = "normal";
            elem.style.wordWrap = "break-word";

            // === FIX FOR TEXT CLIPPING & QUALITY ===
            // Apply font styles and padding *only* to elements that typically hold text.
            if (['p', 'li', 'h1', 'h2', 'h3', 'h4', 'div', 'span'].includes(tagName)) {
                elem.style.fontFamily = "Arial, sans-serif";
                elem.style.fontSize = "16px";
                elem.style.lineHeight = "1.5";
                // THIS IS THE FIX: Add vertical padding for "breathing room"
                elem.style.paddingTop = "2px";
                elem.style.paddingBottom = "2px";
            }

            // Add back basic semantic styling
            if (['h1', 'h2', 'h3', 'h4'].includes(tagName)) {
                elem.style.fontWeight = "bold";
                elem.style.margin = "16px 0 8px 0";
            }
            if (tagName === 'h1') elem.style.fontSize = "24px";
            if (tagName === 'h2') elem.style.fontSize = "20px";

            // Fix list rendering
            if (tagName === 'ul' || tagName === 'ol') {
                elem.style.paddingLeft = "40px"; // Indent list
                elem.style.margin = "10px 0";
            }
            if (tagName === 'li') {
                elem.style.listStylePosition = "outside"; // Show bullets
                elem.style.display = "list-item";
            }
          }
          
          // 4. Style the root element itself
          (clonedRoot as HTMLElement).style.backgroundColor = "#ffffff";
          (clonedRoot as HTMLElement).style.color = "#000000";
          (clonedRoot as HTMLElement).style.padding = "40px";
          (clonedRoot as HTMLElement).style.boxSizing = "border-box";
          (clonedRoot as HTMLElement).style.width = "800px";
          (clonedRoot as HTMLElement).style.overflow = "visible";
        },
      });
      
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      
      const imgProps = pdf.getImageProperties(img);
      const pdfPageWidth = pdf.internal.pageSize.getWidth();
      const pdfPageHeight = pdf.internal.pageSize.getHeight();
      
      const margin = 40;
      const usableWidth = pdfPageWidth - (margin * 2);
      const usableHeight = (imgProps.height * usableWidth) / imgProps.width;
      const pageHeightWithMargin = pdfPageHeight - (margin * 2);

      if (usableHeight > pageHeightWithMargin) {
        // --- Multi-page logic (REVISED) ---
        let heightLeft = usableHeight;
        let position = margin;
        
        pdf.addImage(img, 'PNG', margin, position, usableWidth, usableHeight);
        heightLeft -= pageHeightWithMargin;
        
        let page = 1;
        while (heightLeft > 0) {
          pdf.addPage();
          position = margin - (pageHeightWithMargin * page); // Corrected position
          pdf.addImage(img, 'PNG', margin, position, usableWidth, usableHeight);
          heightLeft -= pageHeightWithMargin;
          page++;
        }
      } else {
        // --- Single-page logic ---
        pdf.addImage(img, "PNG", margin, margin, usableWidth, usableHeight);
      }
      
      pdf.save("roadmarshal-report.pdf");
      
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    // ... (Your JSX remains the same)
    <div className="space-y-4">
      <div id="result-root" className="p-4 bg-white dark:bg-zinc-900 border rounded">
        <MarkdownRenderer content={answer} />
      </div>

      <div className="flex gap-3">
        <button onClick={downloadPDF} className="px-4 py-2 bg-blue-600 text-white rounded">Download PDF</button>
        <button onClick={onRestart} className="px-4 py-2 border rounded">Restart</button>
      </div>
    </div>
  );
}