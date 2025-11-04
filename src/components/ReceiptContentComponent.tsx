import { useCallback } from "react";
import {
  formatCurrency,
  Item,
  LayoutProps,
  ReceiptContentProps,
} from "../types/type";
import { PAPER_SIZES } from "../utils/size";
import { Layout1_Classic } from "./Layout1_Classic";
import { Layout4_Invoice } from "./Layout4_Invoice";
import { Layout6_Kitchen } from "./Layout6_Kitchen";
import { LayoutPlaceholder } from "./LayoutPlaceholder";
import { Layout2_ModernGrid } from "./Layout2_ModernGrid";
import { Layout3_DarkMode } from "./Layout3_DarkMode";
import { Layout5_StackedSummary } from "./Layout5_StackedSummary";
import { Layout7_Promotion } from "./Layout7_Promotion";
import { Layout8_FinancialInvoice } from "./Layout8_FinancialInvoice";
import {
  Layout10_PillHeader,
  Layout11_SplitHeader,
  Layout12_BoxedSummary,
  Layout13_ItemEmphasis,
  Layout14_ECommerce,
  Layout15_Minimalist,
  Layout16_VibrantTropical,
  Layout9_SleekUnderline,
} from "./moremoretemple";

export const ReceiptContentComponent: React.FC<ReceiptContentProps> = ({
  order,
  layout = 1,
  alignment = "center",
  primaryColor = "#007BFF",
  textColor = "#000000",
  borderColor = "#CCCCCC",
  headerBgColor = "transparent",
  baseFontSize = 9,
  paperSize = "58mm",
  fontFamily = "Consolas, monospace",
  logoUrl = "",
  headerText = "",
  footerText = "",
  sellerName = "",
  showSignature = false,
  showTaxBreakdown = false,
}) => {
  const alignStyle =
    alignment === "start" ? "left" : alignment === "end" ? "right" : "center";
  const paper = PAPER_SIZES["58mm"] || PAPER_SIZES["58mm"];
  const formatItemTotal = useCallback(
    (item: Item) => formatCurrency(item.price * item.quantity),
    []
  );

  const commonProps: LayoutProps = {
    order,
    alignStyle,
    primaryColor,
    borderColor,
    headerBgColor,
    formatItemTotal,
    headerText,
    footerText,
    sellerName,
    showSignature,
    textColor,
    layout,
    alignment,
    baseFontSize,
    paperSize,
    fontFamily,
    logoUrl,
    showTaxBreakdown,
    customCss: "",
  };

  let content;
  switch (layout) {
    case 1:
      content = <Layout1_Classic {...commonProps} />;
      break;
    case 2:
      content = <Layout2_ModernGrid {...commonProps} />;
      break;
    case 3:
      content = <Layout3_DarkMode {...commonProps} />;
      break;
    case 4:
      content = <Layout4_Invoice {...commonProps} />;
      break;
    case 5:
      content = <Layout5_StackedSummary {...commonProps} />;
      break;
    case 6:
      content = <Layout6_Kitchen {...commonProps} />;
      break;
    case 7:
      content = <Layout7_Promotion {...commonProps} />;
      break;
    case 8:
      content = <Layout8_FinancialInvoice {...commonProps} />;
      break;
    case 9:
      content = <Layout9_SleekUnderline {...commonProps} />;
      break;
    case 10:
      content = <Layout10_PillHeader {...commonProps} />;
      break;
    case 11:
      content = <Layout11_SplitHeader {...commonProps} />;
      break;
    case 12:
      content = <Layout12_BoxedSummary {...commonProps} />;
      break;
    case 13:
      content = <Layout13_ItemEmphasis {...commonProps} />;
      break;
    case 14:
      content = <Layout14_ECommerce {...commonProps} />;
      break;
    case 15:
      content = <Layout15_Minimalist {...commonProps} />;
      break;
    case 16:
      content = <Layout16_VibrantTropical {...commonProps} />;
      break;
    default:
      content = <LayoutPlaceholder layoutNum={layout} {...commonProps} />;
      break;
  }

  // Conditionally wrap Layout 4 (A4) to maintain its fixed size, otherwise use POS container
  const contentWrapper =
    layout === 4 ? (
      content
    ) : (
      <div
        style={{
          ...paper, // { width: '58mm' }
          fontFamily,
          fontSize: `${baseFontSize}px`,
          color: textColor,
          lineHeight: "1.2",
          padding: "5px",
          margin: "0 auto",
          textAlign: alignStyle,
          boxSizing: "content-box",
        }}
      >
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Logo"
            style={{
              maxWidth: "100%",
              maxHeight: "50px",
              margin: "5px auto",
              display: "block",
            }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
        {content}

        {layout !== 4 && layout !== 6 && (
          <h2
            style={{
              fontSize: "1.222em",
              margin: "5px 0",
              display: "flex",
              justifyContent: "space-between",
              borderTop: `1px solid ${primaryColor}`,
              borderBottom: `1px solid ${primaryColor}`,
              padding: "4px 0",
              color: primaryColor,
            }}
          >
            <span>GRAND TOTAL:</span>
            <span style={{ fontWeight: "900" }}>
              {formatCurrency(order.total)}
            </span>
          </h2>
        )}

        {layout !== 4 && (
          <>
            <p style={{ marginTop: "10px" }}>
              {footerText || "Thank you for shopping!"}
            </p>
            {showSignature && (
              <div
                style={{
                  marginTop: "20px",
                  borderTop: "1px dashed #ccc",
                  paddingTop: "10px",
                  textAlign: "center",
                  fontSize: "0.8em",
                }}
              >
                <div
                  style={{
                    height: "15px",
                    borderBottom: "1px solid #000",
                    marginBottom: "5px",
                    width: "80%",
                    margin: "0 auto",
                  }}
                ></div>
                <p>Authorized: {sellerName || "N/A"}</p>
              </div>
            )}
            <p style={{ fontSize: "0.777em", margin: "5px 0" }}>
              {new Date().toLocaleString()}
            </p>
          </>
        )}
      </div>
    );

  return (
    <div
      id="receipt-content-target-wrapper"
      style={{ minWidth: "58mm", margin: "0 auto" }}
    >
      {contentWrapper}
    </div>
  );
};
