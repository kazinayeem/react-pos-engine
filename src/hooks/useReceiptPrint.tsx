import { useCallback } from "react";
import { renderLayoutHtml } from "../components/renderLayoutHtml";
import {
  formatCurrency,
  Order,
  PrintOptions,
  ReceiptContent,
} from "../types/type";
import { PAPER_SIZES } from "../utils/size";

export const useReceiptPrint = (orderData: Order, options: PrintOptions) => {
  const {
    layout,
    alignment,
    primaryColor,
    textColor,
    borderColor,
    baseFontSize,
    paperSize,
    fontFamily,
    logoUrl,
    footerText,
    sellerName,
    showSignature,
    customCss,
  } = options;

  const printReceipt = useCallback(() => {
    if (!orderData || !orderData.items.length) {
      console.error("Cannot print: Order data is missing or empty.");
      return;
    }

    const alignStyle =
      alignment === "start" ? "left" : alignment === "end" ? "right" : "center";
    const paper = PAPER_SIZES["58mm"] || PAPER_SIZES["58mm"];
    const isDocumentSize = paperSize === "a4" || paperSize === "letter";

    // Calculate print window size (50% of screen width, 70% of screen height)
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const printWindowWidth = Math.max(700, Math.floor(screenWidth * 0.5));
    const printWindowHeight = Math.max(600, Math.floor(screenHeight * 0.7));

    // Generate layout-specific content HTML
    const receiptBodyHtml = renderLayoutHtml(orderData, options, alignStyle);

    // Conditional elements for POS layouts (not A4)
    const logoHtml =
      logoUrl && !isDocumentSize
        ? `<img src="${logoUrl}" alt="Logo" style="max-width: 100%; max-height: 50px; margin: 5px auto; display: block;" onerror="this.style.display='none';">`
        : "";
    const totalHtml =
      !isDocumentSize && layout !== 6
        ? `
        <!-- Consistent Total -->
        <h2 class="grand-total-style">
            <span>GRAND TOTAL:</span>
            <span style="font-weight: 900;">${formatCurrency(
              orderData.total
            )}</span>
        </h2>
    `
        : "";
    const footerHtml = !isDocumentSize
      ? `
      <p style="margin-top: 10px;">${
        footerText || "Thank you for shopping!"
      }</p>
      ${
        showSignature
          ? `
        <div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px; text-align: center; font-size: 0.8em;">
          <div style="height: 15px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 80%; margin: 0 auto;"></div>
          <p>Authorized: ${sellerName || "N/A"}</p>
        </div>
      `
          : ""
      }
      <p style="font-size: 0.777em; margin: 5px 0;">${new Date().toLocaleString()}</p>
    `
      : "";

    // Wrap POS-style layouts with the dynamic container
    const posWrapper = !isDocumentSize
      ? `
        <div id="receipt-content-target">
            ${logoHtml}
            ${receiptBodyHtml}
            ${totalHtml}
            ${footerHtml}
        </div>
    `
      : receiptBodyHtml;

    // --- Full HTML Document Construction ---
    const receiptHtml = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Receipt Print</title>
          <style>
              @page { 
                size: ${isDocumentSize ? paperSize : "auto"}; 
                margin: ${isDocumentSize ? "15mm" : "0"}; 
              }
              body { 
                margin: 0; 
                padding: 0; 
                font-family: ${fontFamily};
                color: ${textColor}; /* Global text color */
              }
              #receipt-content-target {
                  width: ${paper.width};
                  max-width: ${
                    paper.width
                  }; /* Crucial fix for big window stretching on POS sizes */
                  font-size: ${baseFontSize}px;
                  line-height: 1.2;
                  padding: 5px;
                  margin: 0 auto;
                  text-align: ${alignStyle};
                  box-sizing: content-box;
              }
              /* Ensure A4/Letter size uses 100% width and default document margins */
              ${
                isDocumentSize
                  ? `
                #receipt-content-target { 
                    width: 100%; 
                    max-width: 100%;
                    padding: 0;
                    margin: 0;
                    text-align: left; /* Default for documents */
                }
              `
                  : ""
              }
              
              table { width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; }
              th, td { padding: 2px 0; }
              
              /* Apply dynamic color to the Grand Total section */
              .grand-total-style {
                font-size: 1.222em; 
                margin: 5px 0; 
                display: flex; 
                justify-content: space-between; 
                border-top: 1px solid ${primaryColor}; 
                border-bottom: 1px solid ${primaryColor}; 
                padding: 4px 0; 
                color: ${primaryColor};
              }

              @media print {
                  html, body { height: auto; overflow: hidden; }
              }

              /* --- Custom CSS Injection --- */
              ${customCss}
          </style>
      </head>
      <body>
        ${posWrapper}
      </body>
      </html>
    `;
    // --- End Full HTML Document Construction ---

    const printWindow = window.open(
      "",
      "_blank",
      `height=${printWindowHeight},width=${printWindowWidth}`
    );
    if (printWindow) {
      printWindow.document.write(receiptHtml);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
        // Close window after printing/cancelling for POS styles, but not A4/Letter
        if (!isDocumentSize) {
          setTimeout(() => printWindow.close(), 1000);
        }
      };
    } else {
      console.warn(
        "Could not open print window. Check pop-up blocker settings."
      );
    }
  }, [orderData, options]);

  return { printReceipt, ReceiptContent };
};
