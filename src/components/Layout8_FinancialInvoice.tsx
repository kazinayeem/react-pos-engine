import { memo } from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout8_FinancialInvoice: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    borderColor,
    alignStyle,
  }) => {
    // Calculate approximate tax rate for display purposes
    const taxRate =
      order.subtotal > 0
        ? ((order.tax / order.subtotal) * 100).toFixed(1)
        : "0.0";

    return (
      <div className="p-8 space-y-4 font-serif text-gray-900 text-right bg-white border border-gray-300 shadow-md">
        <header className="pb-4">
          <h1 className={`text-4xl font-bold ${primaryColor}`}>
            {headerText || "PURCHASE INVOICE"}
          </h1>
          <div className="text-sm mt-1">
            <p className="font-semibold">ID: {order.id}</p>
            <p className="text-xs text-gray-500">
              Issued: {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
        </header>

        <ItemTable
          items={order.items}
          formatItemTotal={formatItemTotal}
          borderColor="border-gray-300"
        />

        {showTaxBreakdown && (
          <footer className="pt-4 text-base">
            <div className="flex justify-end mt-1 space-x-12">
              <span className="font-normal w-1/4 text-left">Subtotal:</span>
              <span className="font-medium w-1/4">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-end mt-1 space-x-12">
              <span className="font-normal w-1/4 text-left">
                Tax ({taxRate}%):
              </span>
              <span className="font-medium w-1/4">
                {formatCurrency(order.tax)}
              </span>
            </div>
            <div
              className={`flex justify-end mt-3 text-2xl font-extrabold pt-3 border-t-8 border-b-2 border-gray-900 space-x-12`}
            >
              <span className="w-1/4 text-left">AMOUNT DUE:</span>
              <span className="w-1/4">{formatCurrency(order.total)}</span>
            </div>
          </footer>
        )}
      </div>
    );
  }
);
