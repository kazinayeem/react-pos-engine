import { memo } from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout7_Promotion: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    alignStyle,
  }) => (
    <div className="p-6 space-y-3 font-sans text-gray-800 text-left">
      <header
        className={`pb-3 border-b-2 ${primaryColor.replace(
          "text-",
          "border-"
        )}`}
      >
        <h1 className={`text-4xl font-black ${primaryColor} text-center`}>
          {headerText || "Flash Sale Receipt"}
        </h1>
        <p className="mt-1 text-sm text-center">
          Order #: {order.id} | {new Date(order.date).toLocaleDateString()}
        </p>
      </header>

      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />

      {showTaxBreakdown && (
        <footer className="pt-3 text-sm">
          <div className="flex justify-end items-center mt-1">
            <span className="w-1/4 text-right">Subtotal:</span>
            <span className="font-medium w-1/4 text-right">
              {formatCurrency(order.subtotal)}
            </span>
          </div>
          <div className="flex justify-end items-center mt-1">
            <span className="w-1/4 text-right">Tax:</span>
            <span className="font-medium w-1/4 text-right">
              {formatCurrency(order.tax)}
            </span>
          </div>
          <div
            className={`flex justify-end items-center mt-3 text-xl font-extrabold pt-2 border-t-4 border-double ${primaryColor.replace(
              "text-",
              "border-"
            )} space-x-4`}
          >
            <span className="w-1/4 text-right">TOTAL PAID:</span>
            <span className="w-1/4 text-right">
              {formatCurrency(order.total)}
            </span>
          </div>
        </footer>
      )}
      <div
        className={`mt-5 p-3 text-center bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800`}
      >
        <p className="font-bold text-lg">20% OFF YOUR NEXT ORDER!</p>
        <p className="text-sm">Use code: SAVE20NOW</p>
      </div>
    </div>
  )
);
