import React, { memo } from "react";
import { formatCurrency, Item, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";
const getBorderClass = (colorClass: string, prefix: string = "border") =>
  colorClass.replace("text-", `${prefix}-`);
const getBgClass = (colorClass: string) => colorClass.replace("text-", "bg-");

// ItemTable Component (Updated to use the 'Item' type)
interface ItemTableProps {
  items: Item[];
  formatItemTotal: (item: Item) => string;
  borderColor: string;
}
const Layout9_SleekUnderline: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    alignStyle,
  }) => {
    const textAlignClass =
      alignStyle === "left"
        ? "text-left"
        : alignStyle === "right"
        ? "text-right"
        : "text-center";

    return (
      <div
        className={`p-6 space-y-5 font-sans text-gray-800 ${textAlignClass}`}
      >
        <header
          className={`pb-3 ${getBorderClass(
            primaryColor,
            "border-b-4"
          )} border-solid`}
        >
          <h1
            className={`text-3xl font-bold ${primaryColor} tracking-tight uppercase`}
          >
            {headerText || "Modern Commerce"}
          </h1>
          <div className="text-sm mt-1 flex justify-between font-medium text-gray-500">
            <span className="text-left">Order #: {order.id}</span>
            <span className="text-right">
              {new Date(order.date).toLocaleDateString()}
            </span>
          </div>
        </header>

        <ItemTable
          items={order.items}
          formatItemTotal={formatItemTotal}
          borderColor="border-gray-200"
        />

        {/* Totals and Summary */}
        <div
          className={`pt-4 border-t border-dashed border-gray-300 text-base flex flex-col items-${alignStyle}`}
        >
          {showTaxBreakdown && (
            <>
              <div className="flex justify-between w-full max-w-xs space-x-4">
                <span className="text-left">Subtotal:</span>
                <span className="font-medium text-right">
                  {formatCurrency(order.subtotal)}
                </span>
              </div>
              <div className="flex justify-between w-full max-w-xs space-x-4 mt-1">
                <span className="text-left">Tax:</span>
                <span className="font-medium text-right">
                  {formatCurrency(order.tax)}
                </span>
              </div>
            </>
          )}

          <div
            className={`flex justify-between w-full max-w-xs mt-3 text-2xl font-bold pt-3 ${getBorderClass(
              primaryColor,
              "border-t-2"
            )}`}
          >
            <span className="text-left">TOTAL:</span>
            <span className={`text-right ${primaryColor}`}>
              {formatCurrency(order.total)}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

// --- Layout 10: Pill Header ---
const Layout10_PillHeader: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    alignStyle,
  }) => {
    const textAlignClass =
      alignStyle === "left"
        ? "text-left"
        : alignStyle === "right"
        ? "text-right"
        : "text-center";

    return (
      <div
        className={`p-4 space-y-4 font-sans text-gray-800 ${textAlignClass}`}
      >
        <div
          className={`inline-block px-6 py-2 text-xl font-bold uppercase rounded-full ${getBgClass(
            primaryColor
          )} text-white shadow-md mb-4`}
        >
          {headerText || "Checkout Receipt"}
        </div>

        <header className="pb-4 space-y-1 border-b border-dashed">
          <p className="font-semibold text-lg">
            Transaction ID: <span className={primaryColor}>#{order.id}</span>
          </p>
          <p className="text-xs text-gray-500">
            Date: {new Date(order.date).toLocaleDateString()}
          </p>
        </header>

        <ItemTable
          items={order.items}
          formatItemTotal={formatItemTotal}
          borderColor={borderColor}
        />

        {showTaxBreakdown && (
          <div
            className={`pt-4 border-t border-solid ${borderColor} text-sm flex flex-col items-${alignStyle} w-full`}
          >
            <div className="flex justify-between w-full max-w-xs space-x-8">
              <span className="text-left">Subtotal:</span>
              <span className="font-medium text-right">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between w-full max-w-xs space-x-8 mt-1">
              <span className="text-left">Tax:</span>
              <span className="font-medium text-right">
                {formatCurrency(order.tax)}
              </span>
            </div>
          </div>
        )}

        <div
          className={`pt-3 mt-3 text-2xl font-extrabold ${getBorderClass(
            primaryColor,
            "border-t-4"
          )} border-double flex justify-between w-full max-w-xs mx-auto`}
        >
          <span className="text-left">AMOUNT:</span>
          <span className={`text-right ${primaryColor}`}>
            {formatCurrency(order.total)}
          </span>
        </div>
      </div>
    );
  }
);

// --- Layout 11: Split Header ---
const Layout11_SplitHeader: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
  }) => (
    <div className="p-4 space-y-4 font-sans text-gray-800 text-left">
      <header className="pb-4 border-b border-gray-300">
        <h1
          className={`text-2xl font-extrabold ${primaryColor} uppercase mb-2`}
        >
          {headerText || "Purchase Order"}
        </h1>
        <div
          className={`grid grid-cols-2 gap-4 text-sm font-medium border-t-2 border-b-2 ${getBorderClass(
            primaryColor
          )} py-2`}
        >
          <div>
            <span className="font-bold">Ref:</span> {order.id}
          </div>
          <div className="text-right">
            <span className="font-bold">Date:</span>{" "}
            {new Date(order.date).toLocaleDateString()}
          </div>
        </div>
      </header>

      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      {/* Totals and Summary */}
      <div
        className={`pt-4 border-t-2 ${borderColor} text-base flex justify-end`}
      >
        <div className="w-full max-w-md space-y-2">
          {showTaxBreakdown && (
            <>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">
                  {formatCurrency(order.subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-medium">{formatCurrency(order.tax)}</span>
              </div>
            </>
          )}
          <div
            className={`flex justify-between pt-2 mt-2 text-2xl font-bold border-t ${getBorderClass(
              primaryColor
            )}`}
          >
            <span>TOTAL:</span>
            <span className={primaryColor}>{formatCurrency(order.total)}</span>
          </div>
        </div>
      </div>
    </div>
  )
);

// --- Layout 12: Boxed Summary ---
const Layout12_BoxedSummary: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    alignStyle,
  }) => (
    <div className={`p-4 space-y-4 font-sans text-gray-800 text-${alignStyle}`}>
      <header className="pb-4 border-b border-dashed border-gray-400">
        <h1 className={`text-xl font-bold ${primaryColor} uppercase`}>
          {headerText || "SALES RECEIPT"}
        </h1>
        <p className="text-sm text-gray-500">Invoice: {order.id}</p>
      </header>

      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      {/* Boxed Totals Section */}
      <div
        className={`mt-6 p-4 rounded-lg shadow-inner ${getBgClass(
          primaryColor
        ).replace("text-", "bg-")} bg-opacity-10 border ${getBorderClass(
          primaryColor
        )}`}
      >
        <p className="text-sm font-medium text-gray-600 mb-2">SUMMARY</p>
        {showTaxBreakdown && (
          <div className="space-y-1 border-b pb-2 mb-2 border-gray-300">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-medium">{formatCurrency(order.tax)}</span>
            </div>
          </div>
        )}
        <div className="flex justify-between pt-1 text-2xl font-extrabold">
          <span>AMOUNT DUE:</span>
          <span className={primaryColor}>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  )
);

// --- Layout 13: Item Emphasis ---
const Layout13_ItemEmphasis: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
  }) => (
    <div className="p-4 space-y-5 font-sans text-gray-800 text-left">
      <header className="pb-2 border-b-2 border-dashed border-gray-400">
        <h1 className={`text-2xl font-extrabold ${primaryColor} uppercase`}>
          {headerText || "Order Confirmation"}
        </h1>
        <div className="text-sm mt-1 flex justify-between">
          <p>
            Customer:{" "}
            <span className="font-semibold">{order.customer.name}</span>
          </p>
          <p>
            Ref: <span className="font-semibold">{order.id}</span>
          </p>
        </div>
      </header>

      {/* Item table without internal borders, using strong typography */}
      <div className="space-y-2">
        {order.items.map((item, index) => (
          <div
            key={index}
            className={`py-2 border-b border-dashed ${borderColor}`}
          >
            <div className="flex justify-between items-start">
              <span className="text-base font-bold w-1/2">{item.name}</span>
              <span className="text-base font-bold w-1/4 text-right">
                {item.quantity}x
              </span>
              <span className="text-base font-bold w-1/4 text-right">
                {formatItemTotal(item)}
              </span>
            </div>
            <p className="text-xs text-gray-500 italic">
              @ {formatCurrency(item.price)} each
            </p>
          </div>
        ))}
      </div>

      {/* Totals Summary */}
      <div className="pt-2">
        {showTaxBreakdown && (
          <div className="text-base space-y-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-medium">{formatCurrency(order.tax)}</span>
            </div>
          </div>
        )}
        <div
          className={`mt-3 pt-3 flex justify-between text-3xl font-extrabold ${getBorderClass(
            primaryColor,
            "border-t-4"
          )}`}
        >
          <span>FINAL:</span>
          <span className={primaryColor}>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  )
);

// --- Layout 14: E-Commerce / Shipping ---
const Layout14_ECommerce: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
  }) => (
    <div className="p-4 space-y-5 font-sans text-gray-800 text-left">
      <header
        className={`py-3 px-4 ${getBgClass(
          primaryColor
        )} text-white rounded-t-lg`}
      >
        <h1 className="text-xl font-extrabold">
          {headerText || "Online Order Invoice"}
        </h1>
        <p className="text-sm font-light mt-1">
          Order Date: {new Date(order.date).toLocaleDateString()}
        </p>
      </header>

      {/* Shipping/Customer Detail Box */}
      <div className="p-3 border border-gray-300 rounded-md bg-gray-50 text-sm">
        <p className="font-bold mb-1 border-b border-gray-200 pb-1">
          Shipping Details
        </p>
        <p>Recipient: {order.customer.name}</p>
        <p>Address: {order.customer.address}</p>
        <p className="font-medium">
          Tracking ID:{" "}
          <span className={primaryColor}>
            {order.id.slice(0, 8).toUpperCase()}
          </span>
        </p>
      </div>

      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      {/* Totals Summary */}
      <div className="pt-2">
        {showTaxBreakdown && (
          <div className="text-base space-y-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-medium">{formatCurrency(order.tax)}</span>
            </div>
          </div>
        )}
        <div
          className={`mt-3 pt-3 flex justify-between text-2xl font-extrabold border-t-2 border-gray-400`}
        >
          <span>TOTAL CHARGED:</span>
          <span className={primaryColor}>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  )
);

// --- Layout 15: Minimalist ---
const Layout15_Minimalist: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
  }) => (
    <div className="p-4 space-y-5 font-sans text-gray-800 text-left">
      <header className="pb-4 border-b border-gray-300">
        <h1 className={`text-xl font-normal ${primaryColor}`}>
          {headerText || "Receipt"}
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Date: {new Date(order.date).toLocaleDateString()} | Ref: {order.id}
        </p>
      </header>

      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      {/* Totals Summary */}
      <div className="pt-2">
        {showTaxBreakdown && (
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-normal">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-normal">{formatCurrency(order.tax)}</span>
            </div>
          </div>
        )}
        <div
          className={`mt-3 pt-3 flex justify-between text-xl font-bold border-t-2 border-gray-400`}
        >
          <span>Total:</span>
          <span className={primaryColor}>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  )
);

// --- Layout 16: Vibrant Tropical ---
const Layout16_VibrantTropical: React.FC<LayoutProps> = memo(
  ({ order, primaryColor, headerText, formatItemTotal, showTaxBreakdown }) => {
    const accentColor = "text-amber-500";

    return (
      <div className="p-4 space-y-5 font-sans text-gray-900 text-center">
        <header
          className={`py-4 px-4 ${getBgClass(
            primaryColor
          )} text-white shadow-lg rounded-b-xl`}
        >
          <h1 className="text-3xl font-black uppercase tracking-wider">
            {headerText || "Tropical Sales"}
          </h1>
          <p
            className={`text-sm mt-1 font-bold ${accentColor.replace(
              "text-",
              "text-"
            )}`}
          >
            Order ID: {order.id}
          </p>
        </header>

        {/* Item Table (using custom styles for item emphasis) */}
        <div className="space-y-3 pt-4 border-t-4 border-double border-gray-300">
          {order.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm border border-gray-200"
            >
              <span className="text-base font-bold text-left w-1/2">
                {item.quantity}x {item.name}
              </span>
              <span
                className={`text-lg font-extrabold w-1/2 text-right ${primaryColor}`}
              >
                {formatItemTotal(item)}
              </span>
            </div>
          ))}
        </div>

        {/* Totals Summary */}
        <div className="pt-2">
          {showTaxBreakdown && (
            <div
              className={`text-base space-y-1 border-t pt-2 border-dashed ${accentColor.replace(
                "text-",
                "border-"
              )}`}
            >
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">
                  {formatCurrency(order.subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-medium">{formatCurrency(order.tax)}</span>
              </div>
            </div>
          )}
          <div
            className={`mt-3 pt-3 flex justify-between text-3xl font-black ${getBorderClass(
              primaryColor,
              "border-t-8"
            )} border-double`}
          >
            <span>TOTAL:</span>
            <span className={primaryColor}>{formatCurrency(order.total)}</span>
          </div>
        </div>
      </div>
    );
  }
);

// --- Layout 17: Condensed ---
const Layout17_Condensed: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
  }) => (
    <div className="p-2 space-y-2 font-mono text-gray-900 text-center text-sm">
      <header className="pb-2 border-b-2 border-dashed border-gray-400">
        <h1 className={`text-lg font-extrabold ${primaryColor} uppercase`}>
          {headerText || "Quick Receipt"}
        </h1>
        <p className="text-xs mt-1">
          TID: {order.id} | {new Date(order.date).toLocaleDateString()}
        </p>
      </header>

      {/* Condensed Item Table - no headers, smaller text */}
      <div className="space-y-1">
        {order.items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between border-b border-dashed ${borderColor}`}
          >
            <span className="w-1/2 text-left">
              {item.quantity}x {item.name}
            </span>
            <span className="w-1/2 text-right font-medium">
              {formatItemTotal(item)}
            </span>
          </div>
        ))}
      </div>

      {/* Totals Summary (very condensed) */}
      <div className="pt-2">
        {showTaxBreakdown && (
          <div className="text-xs space-y-1">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-normal">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-normal">{formatCurrency(order.tax)}</span>
            </div>
          </div>
        )}
        <div
          className={`mt-2 pt-2 flex justify-between text-base font-bold border-t border-solid ${getBorderClass(
            primaryColor
          )}`}
        >
          <span>TOTAL PAID:</span>
          <span className={primaryColor}>{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  )
);

export {
  Layout9_SleekUnderline,
  Layout10_PillHeader,
  Layout11_SplitHeader,
  Layout12_BoxedSummary,
  Layout13_ItemEmphasis,
  Layout14_ECommerce,
  Layout15_Minimalist,
  Layout16_VibrantTropical,
  Layout17_Condensed,
};
