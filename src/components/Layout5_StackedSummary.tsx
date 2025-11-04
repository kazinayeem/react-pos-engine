import { memo } from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout5_StackedSummary: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    alignStyle,
  }) => (
    <div className="p-6 space-y-4 font-serif text-gray-700 text-left border-2 border-gray-100">
      <header className="pb-4">
        <h1 className={`text-3xl font-light ${primaryColor} uppercase`}>
          {headerText || "Invoice Copy"}
        </h1>
        <p
          className={`text-sm mt-1 pb-3 border-b-4 ${primaryColor.replace(
            "text-",
            "border-"
          )}`}
        >
          Order Reference: <span className="font-semibold">{order.id}</span>
        </p>
      </header>

      {showTaxBreakdown && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-base font-semibold mb-2 border-b pb-1">
            Payment Summary
          </h2>
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span className="font-medium">
              {formatCurrency(order.subtotal)}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Tax:</span>
            <span className="font-medium">{formatCurrency(order.tax)}</span>
          </div>
          <div
            className={`flex justify-between text-xl font-bold mt-3 pt-2 border-t-2 ${primaryColor.replace(
              "text-",
              "border-"
            )}`}
          >
            <span>TOTAL DUE:</span>
            <span className={primaryColor}>{formatCurrency(order.total)}</span>
          </div>
        </div>
      )}

      <h2 className="text-lg font-semibold pt-2">
        Order Details ({order.items.length} items)
      </h2>
      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      <footer className="text-sm pt-4 text-center italic text-gray-500">
        Processed on: {new Date(order.date).toLocaleString()}
      </footer>
    </div>
  )
);
