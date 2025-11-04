import { formatCurrency, Order, PrintOptions } from "../types/type";
import { generateItemTableHtml } from "./generateItemTableHtml";

export const renderLayoutHtml = (
  orderData: Order,
  options: PrintOptions,
  alignStyle: string
): string => {
  const {
    layout,
    primaryColor,
    borderColor,
    headerText,
    headerBgColor,
    sellerName,
    showSignature,
    showTaxBreakdown,
  } = options;

  // Determines if we use the simple kitchen item table format (no prices)
  const isKitchenLayout = layout === 6;
  const itemTable = generateItemTableHtml(
    orderData.items,
    borderColor,
    isKitchenLayout
  );

  // Helper function for the main title/store name
  const baseHeader = (title: string, color: string) => `
    <h1 style="font-size: 1.4em; margin: 5px 0; color: ${color}; text-transform: uppercase;">${
    title || "The Store Name"
  }</h1>
  `;

  // Common POS Footer (Subtotal/Tax breakdown)
  const posFooter = showTaxBreakdown
    ? `
    <footer style="border-top: 1px dashed ${borderColor}; padding-top: 5px; text-align: ${alignStyle};">
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Subtotal:</span><span style="font-weight: bold;">${formatCurrency(
        orderData.subtotal
      )}</span></p>
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Tax:</span><span style="font-weight: bold;">${formatCurrency(
        orderData.tax
      )}</span></p>
    </footer>
  `
    : "";

  switch (layout) {
    case 1: // Classic POS
    case 2: // Detailed POS
    case 3: // Minimalist POS
      const customFieldsHtml =
        layout === 2
          ? orderData.customFields
              .map(
                (f) => `<p style="font-size: 0.9em;">${f.key}: ${f.value}</p>`
              )
              .join("")
          : "";

      return `
        <header style="background-color: ${headerBgColor}; padding: 5px 0;">
          ${baseHeader(headerText, primaryColor)}
          <p style="margin: 2px 0;">Order #: ${orderData.id}</p>
          <p style="margin: 5px 0 10px 0; border-bottom: 1px dashed ${borderColor}; padding-bottom: 5px;">Date: ${new Date(
        orderData.date
      ).toLocaleDateString()}</p>
          ${customFieldsHtml}
        </header>
        ${itemTable}
        ${posFooter}
      `;

    case 4: {
      // Standard A4 Invoice
      const billToSection = `
        <section style="margin-bottom: 20px;">
          <h2 style="font-size: 16px; border-bottom: 1px solid ${borderColor}; padding-bottom: 5px; margin-bottom: 10px; color: ${primaryColor};">Bill To:</h2>
          <p style="margin: 2px 0; font-weight: bold;">${orderData.customer.name}</p>
          <p style="margin: 2px 0;">${orderData.customer.address}</p>
        </section>
      `;

      const totalsSummary = `
        <div style="margin-top: 50px; text-align: right; border-top: 1px solid ${borderColor}; padding-top: 10px;">
          <p style="margin: 2px 0;">Subtotal: ${formatCurrency(
            orderData.subtotal
          )}</p>
          <p style="margin: 2px 0;">Tax: ${formatCurrency(orderData.tax)}</p>
          <h3 style="margin: 5px 0; color: ${primaryColor};">GRAND TOTAL: ${formatCurrency(
        orderData.total
      )}</h3>
        </div>
      `;

      const signatureBlock = showSignature
        ? `
        <div style="margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 10px; display: flex; justify-content: space-around; font-size: 10px;">
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Customer Signature</p>
          </div>
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Authorized by: ${sellerName || "N/A"}</p>
          </div>
        </div>
      `
        : "";

      return `
        <div style="padding: 15mm 10mm; font-size: 12px; min-height: 270mm; box-sizing: border-box; text-align: left;">
          <header style="border-bottom: 3px solid ${primaryColor}; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; background-color: ${headerBgColor}; color: ${primaryColor};">
            <h1 style="font-size: 24px; margin: 0;">INVOICE</h1>
            <div style="text-align: right; color: #000;">
                <p style="margin: 2px 0; font-weight: bold;">${
                  headerText || "React Solutions Ltd."
                }</p>
                <p style="margin: 2px 0; font-size: 10px;">${
                  orderData.customer.address
                }</p>
                <p style="margin: 2px 0; font-size: 10px;">Invoice ID: ${
                  orderData.id
                }</p>
            </div>
          </header>
          ${billToSection}
          ${itemTable}
          ${totalsSummary}
          ${signatureBlock}
        </div>
      `;
    }

    case 5: // Stacked Summary
      const summaryBlock = `
        <div style="border: 2px solid ${primaryColor}; padding: 10px; margin: 10px 0; text-align: ${alignStyle};">
            <h2 style="margin: 0 0 5px 0; font-size: 1.1em; color: ${primaryColor};">ORDER SUMMARY</h2>
            ${posFooter}
        </div>
      `;
      const finalTotal = `
        <h2 
          style="font-size: 1.6em; margin: 10px 0; padding: 5px 0; border-top: 3px double ${primaryColor}; text-align: ${alignStyle}; color: ${primaryColor}; font-weight: 900;"
        >
            TOTAL: ${formatCurrency(orderData.total)}
        </h2>
      `;
      return `
        <header style="padding: 10px 0; background-color: ${headerBgColor};">
          ${baseHeader(headerText, primaryColor)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction ID: ${
            orderData.id
          }</p>
          <p style="margin: 2px 0; font-size: 0.9em;">Customer: ${
            orderData.customer.name
          }</p>
        </header>
        ${summaryBlock}
        ${itemTable}
        ${finalTotal}
      `;

    case 6: {
      // Kitchen Ticket (No price)
      const kitchenItems = orderData.items
        .map(
          (item) => `
        <tr style="border-bottom: 1px dashed ${borderColor};">
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em; width: 10%;">${item.quantity}X</td>
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em;">${item.name}</td>
        </tr>
      `
        )
        .join("");

      return `
        <header style="border-bottom: 2px solid ${primaryColor}; padding-bottom: 5px; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 5px 0; color: ${primaryColor};">KITCHEN ORDER TICKET</h1>
          <p style="margin: 2px 0;">Order #: <span style="font-weight: bold; font-size: 1.2em;">${orderData.id}</span></p>
        </header>
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: 1em;">
          <tbody>${kitchenItems}</tbody>
        </table>
        <p style="font-size: 1.2em; margin-top: 20px; border-top: 1px solid ${primaryColor}; padding-top: 5px;">
          <span style="font-weight: bold; color: red;">NOTES:</span> COOK WELL
        </p>
      `;
    }

    case 7: // Promotion
      const offerBlock = `
        <div style="background-color: #F0FFF0; border: 1px solid ${primaryColor}; padding: 8px; margin-bottom: 10px;">
            <h3 style="margin: 0; font-size: 1.1em; color: green;">🎉 SPECIAL OFFER! 🎉</h3>
            <p style="margin: 2px 0; font-size: 0.9em;">You saved ${formatCurrency(
              orderData.tax / 2
            )} today!</p>
        </div>
      `;
      return `
        <header style="padding: 5px 0; border-bottom: 1px solid ${borderColor}; margin-bottom: 10px;">
            ${baseHeader(headerText, primaryColor)}
            <p style="margin: 2px 0; font-size: 0.9em;">Date: ${new Date(
              orderData.date
            ).toLocaleDateString()}</p>
        </header>
        ${offerBlock}
        ${itemTable}
        ${posFooter}
        <h2 style="font-size: 1.5em; margin: 10px 0; color: ${primaryColor};">TOTAL: ${formatCurrency(
        orderData.total
      )}</h2>
        <p style="font-size: 0.8em; margin-top: 10px;">Visit us online at example.com!</p>
      `;

    case 8: // Financial Invoice (POS Version)
      const detailRow = `
        <div style="display: flex; justify-content: space-between; margin: 10px 0; font-size: 0.9em; border-bottom: 1px dashed ${borderColor}; padding-bottom: 5px;">
            <div style="text-align: left;">
                <p style="margin: 2px 0;">Customer: ${
                  orderData.customer.name
                }</p>
                <p style="margin: 2px 0;">Date: ${new Date(
                  orderData.date
                ).toLocaleDateString()}</p>
            </div>
            <div style="text-align: right; font-weight: bold;">
                <p style="margin: 2px 0; color: ${primaryColor};">Order Ref: ${
        orderData.id
      }</p>
            </div>
        </div>
      `;
      return `
        <header style="background-color: ${headerBgColor}; padding: 10px 5px; border-bottom: 3px solid ${primaryColor};">
          <p style="margin: 0; font-size: 0.9em; text-transform: uppercase; color: ${primaryColor};">${
        headerText || "INVOICE"
      }</p>
          <h1 style="font-size: 1.8em; margin: 5px 0 0 0; color: #000;">${
            sellerName || "Finance Tracker"
          }</h1>
        </header>
        ${detailRow}
        ${itemTable}
        ${posFooter}
      `;

    case 9: // Sleek Underline
      const totalUnderline = `
        <h2 style="font-size: 1.5em; margin: 10px 0; padding-bottom: 5px; border-bottom: 3px double ${primaryColor}; color: ${primaryColor};">
            GRAND TOTAL: ${formatCurrency(orderData.total)}
        </h2>
      `;
      return `
        <header style="padding: 10px 0; border-bottom: 3px solid ${primaryColor}; margin-bottom: 15px;">
            ${baseHeader(headerText, primaryColor)}
            <p style="margin: 2px 0; font-size: 0.9em;">Ref: ${orderData.id}</p>
        </header>
        <section style="margin-bottom: 15px;">
            <h3 style="font-size: 1em; border-bottom: 1px solid ${borderColor}; padding-bottom: 5px; margin-bottom: 5px;">ITEMS</h3>
            ${itemTable}
        </section>
        <section style="margin-top: 15px; border-top: 1px solid ${borderColor}; padding-top: 5px;">
            ${posFooter}
        </section>
        ${totalUnderline}
      `;

    case 10: // Pill Header
      const pillHeader = `
        <div style="padding: 10px; background-color: ${primaryColor}; border-radius: 10px 10px 0 0; text-align: ${alignStyle};">
          <p style="margin: 0; font-size: 0.8em; color: #fff;">TICKET NUMBER:</p>
          <h1 style="font-size: 1.6em; margin: 5px 0 0 0; color: #fff;">#${orderData.id}</h1>
        </div>
      `;
      return `
        ${pillHeader}
        <header style="padding: 10px 0; border-bottom: 2px solid ${borderColor}; margin-bottom: 10px; text-align: ${alignStyle};">
          ${baseHeader(headerText, primaryColor)}
          <p style="margin: 2px 0;">Date: ${new Date(
            orderData.date
          ).toLocaleDateString()}</p>
        </header>
        ${itemTable}
        ${posFooter}
      `;

    case 11: // Split Header
      const splitHeader = `
        <header style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid ${primaryColor}; margin-bottom: 10px;">
            <div style="text-align: left;">
                <h1 style="font-size: 1.2em; margin: 0; color: ${primaryColor};">${
        headerText || "The Shop"
      }</h1>
                <p style="margin: 2px 0; font-size: 0.8em;">Receipt</p>
            </div>
            <div style="text-align: right;">
                <p style="margin: 2px 0; font-weight: bold;">Order: ${
                  orderData.id
                }</p>
                <p style="margin: 2px 0; font-size: 0.8em;">${new Date(
                  orderData.date
                ).toLocaleTimeString()}</p>
            </div>
        </header>
      `;
      return `
        ${splitHeader}
        ${itemTable}
        ${posFooter}
      `;

    case 12: // Boxed Summary
      const boxedSummary = `
        <div style="border: 1px solid ${primaryColor}; padding: 8px; margin: 10px 0; background-color: ${headerBgColor};">
            ${posFooter}
        </div>
        <h2 style="font-size: 1.5em; margin: 5px 0; color: ${primaryColor}; text-align: ${alignStyle};">TOTAL: ${formatCurrency(
        orderData.total
      )}</h2>
      `;
      return `
        <header style="padding: 5px 0; margin-bottom: 10px; border-bottom: 1px dashed ${borderColor};">
          ${baseHeader(headerText, primaryColor)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction: ${
            orderData.id
          }</p>
        </header>
        ${itemTable}
        ${boxedSummary}
      `;

    case 13: // Item Emphasis (Distinct Header/Footer to mark it as unique)
      const emphasisTotal = `
        <div style="margin-top: 10px; padding: 5px 0; border-top: 1px solid ${borderColor}; text-align: ${alignStyle};">
          <p style="font-weight: bold; font-size: 1.1em; color: ${primaryColor};">Total Payable:</p>
          <h2 style="font-size: 2em; margin: 2px 0; color: ${primaryColor};">${formatCurrency(
        orderData.total
      )}</h2>
        </div>
      `;
      return `
        <header style="padding: 10px 0; border-bottom: 5px double ${primaryColor}; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 0; color: ${primaryColor};">${
        headerText || "Item Focus Receipt"
      }</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.8em;">Order: ${
            orderData.id
          } | Date: ${new Date(orderData.date).toLocaleDateString()}</p>
        </header>
        <p style="margin: 5px 0; font-weight: bold; text-align: left;">Items Purchased:</p>
        ${itemTable}
        ${posFooter}
        ${emphasisTotal}
      `;

    case 14: // E-Commerce / Shipping
      const shippingBlock = `
        <section style="margin-bottom: 15px; border: 1px dashed ${borderColor}; padding: 8px; text-align: left;">
            <p style="margin: 2px 0; font-weight: bold;">Shipping To:</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${
              orderData.customer.name
            }</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${
              orderData.customer.address
            }</p>
            <p style="margin: 2px 0; font-size: 0.9em;">Tracking ID: ${orderData.id
              .slice(0, 8)
              .toUpperCase()}</p>
        </section>
      `;
      return `
        <header style="padding: 10px 0; background-color: ${primaryColor}; color: #fff; margin-bottom: 15px; text-align: ${alignStyle};">
          <h1 style="font-size: 1.5em; margin: 0;">${
            headerText || "Online Order Receipt"
          }</h1>
          <p style="margin: 2px 0; font-size: 0.9em;">Order placed: ${new Date(
            orderData.date
          ).toLocaleDateString()}</p>
        </header>
        ${shippingBlock}
        ${itemTable}
        ${posFooter}
      `;

    case 15: // Minimalist
      const minimalistHeader = `
        <header style="padding: 10px 0; margin-bottom: 15px; text-align: ${alignStyle};">
          <h1 style="font-size: 1.2em; margin: 0; text-transform: none;">${
            headerText || "Receipt"
          }</h1>
          <p style="margin: 5px 0; border-top: 1px dashed ${borderColor}; padding-top: 5px; font-size: 0.9em;">
            TID: ${orderData.id} | ${new Date(
        orderData.date
      ).toLocaleDateString()}
          </p>
        </header>
      `;
      const minimalistTotal = `
        <h2 style="font-size: 1.4em; margin: 5px 0; border-top: 1px dashed ${borderColor}; padding-top: 5px; text-align: ${alignStyle};">
            Total: ${formatCurrency(orderData.total)}
        </h2>
      `;
      return `
        ${minimalistHeader}
        ${itemTable}
        <section style="margin-top: 10px; border-top: 1px dashed ${borderColor}; padding-top: 5px;">
            ${posFooter}
        </section>
        ${minimalistTotal}
      `;

    case 16: {
      // Vibrant Tropical
      const secondaryColor = "#FF9800"; // Hardcoded vibrant orange
      const tropicalHeader = `
        <header style="padding: 15px 0; background-color: ${primaryColor}; color: #fff; border-bottom: 3px solid ${secondaryColor}; text-align: ${alignStyle};">
          <h1 style="font-size: 1.6em; margin: 0; text-transform: uppercase; letter-spacing: 2px;">${
            headerText || "TROPICAL SALES"
          }</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.9em; font-weight: bold;">Order: ${
            orderData.id
          }</p>
        </header>
        <div style="background-color: ${secondaryColor}20; padding: 5px; margin: 10px 0; text-align: ${alignStyle};">
            <p style="margin: 0; font-size: 0.9em; color: ${secondaryColor}; font-weight: bold;">Thank You, ${
        orderData.customer.name
      }!</p>
        </div>
      `;
      const tropicalTotal = `
        <div style="margin-top: 10px; padding: 8px; background-color: ${secondaryColor}; color: #fff;">
            <h2 style="font-size: 1.8em; margin: 0; display: flex; justify-content: space-between;">
                <span>GRAND TOTAL</span>
                <span>${formatCurrency(orderData.total)}</span>
            </h2>
        </div>
      `;

      return `
        ${tropicalHeader}
        ${itemTable}
        ${posFooter}
        ${tropicalTotal}
      `;
    }

    default: // Fallback for any non-1-16 or future layout numbers
      return `
        <header style="border-bottom: 1px solid ${borderColor}; padding-bottom: 5px; margin-bottom: 10px; background-color: ${headerBgColor}; text-align: ${alignStyle};">
          <h1 style="font-size: 1.4em; margin: 5px 0; color: ${primaryColor};">Layout ${layout} - Custom Type</h1>
          <p style="margin: 2px 0;">(Fallback: No specific HTML structure defined.)</p>
        </header>
        ${itemTable}
        ${posFooter}
      `;
  }
};
