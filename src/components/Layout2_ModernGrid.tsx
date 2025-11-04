import { memo } from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout2_ModernGrid: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
  }) => (
    <div className="p-6 space-y-4 font-sans text-gray-800 text-left">
      <header
        className={`pb-4 border-b-4 ${primaryColor.replace(
          "text-",
          "border-"
        )}`}
      >
        <h1 className={`text-3xl font-extrabold ${primaryColor}`}>
          {headerText || "Modern Retail Co."}
        </h1>
        <div className="text-sm mt-1 flex justify-between">
          <p>
            Order ID: <span className="font-medium">{order.id}</span>
          </p>
          <p>Date: {new Date(order.date).toLocaleDateString()}</p>
        </div>
      </header>

      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      {showTaxBreakdown && (
        <footer className="grid grid-cols-2 gap-4 pt-4 border-t border-solid border-gray-200">
          <div className="col-span-1 p-2 bg-gray-50 rounded-lg text-sm space-y-1">
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
          <div
            className={`col-span-1 p-3 rounded-lg ${primaryColor.replace(
              "text-",
              "bg-"
            )} text-white font-bold flex flex-col items-center justify-center`}
          >
            <p className="text-xs opacity-80">TOTAL DUE</p>
            <p className="text-2xl">{formatCurrency(order.total)}</p>
          </div>
        </footer>
      )}
      <div className="text-xs pt-4 text-center text-gray-500">
        Thank you for choosing us! Visit us at example.com
      </div>
    </div>
  )
);
