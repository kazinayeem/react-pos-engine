import { memo } from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";
import { Calendar, ShoppingCart } from "lucide-react";

export const Layout3_DarkMode: React.FC<LayoutProps> = memo(
  ({
    order,
    primaryColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    borderColor,
    alignStyle,
  }) => (
    <div className="max-w-md w-full mx-auto p-6 space-y-5 font-mono text-gray-100 bg-gray-900/90 border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-sm transition duration-300 hover:shadow-emerald-900/50">
      {/* HEADER */}
      <header className="pb-4 border-b-2 border-gray-700">
        <h1
          className={`text-2xl font-black text-center tracking-wider ${primaryColor} drop-shadow-lg`}
        >
          <ShoppingCart className="inline w-6 h-6 mr-2 mb-1" />
          -- {headerText || "SYNTHETIC RECEIPT"} --
        </h1>
        <div className="flex justify-between text-xs mt-3 text-gray-400">
          <span className="flex items-center">
            ID:{" "}
            <span className="ml-1 font-semibold text-gray-200">{order.id}</span>
          </span>
          <span className="flex items-center">
            <Calendar className="inline w-3 h-3 mr-1" />
            {new Date(order.date).toLocaleDateString()}
          </span>
        </div>
      </header>

      {/* ITEMS TABLE */}
      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor="border-gray-700"
      />

      {/* TOTALS & BREAKDOWN */}
      {showTaxBreakdown && (
        <footer className="pt-4 border-t-2 border-gray-700">
          <div className="space-y-1 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-medium text-gray-100">
                {formatCurrency(order.subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax:</span>
              <span className="font-medium text-gray-100">
                {formatCurrency(order.tax)}
              </span>
            </div>
          </div>

          {/* FINAL TOTAL */}
          <div
            className={`flex justify-between mt-3 text-2xl font-extrabold ${primaryColor} pt-3 border-t border-gray-700`}
          >
            <span>TOTAL:</span>
            <span>{formatCurrency(order.total)}</span>
          </div>
        </footer>
      )}

      {/* FOOTER MESSAGE */}
      <div
        className={`text-center text-xs pt-3 border-t border-dashed border-gray-700 ${primaryColor} uppercase tracking-widest`}
      >
        *** transaction complete ***
      </div>
    </div>
  )
);
