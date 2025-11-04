import React from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout1_Classic: React.FC<LayoutProps> = React.memo(
  ({
    order,
    primaryColor,
    borderColor,
    headerText,
    formatItemTotal,
    showTaxBreakdown,
    alignStyle,
  }) => (
    <>
      <header style={{ backgroundColor: "transparent", padding: "5px 0" }}>
        <h1
          style={{
            fontSize: "1.4em",
            margin: "5px 0",
            color: primaryColor,
            textTransform: "uppercase",
          }}
        >
          {headerText || "The React Store"}
        </h1>
        <p style={{ margin: "2px 0" }}>Order #: {order.id}</p>
        <p
          style={{
            margin: "5px 0 10px 0",
            borderBottom: `1px dashed ${borderColor}`,
            paddingBottom: "5px",
          }}
        >
          Date: {new Date(order.date).toLocaleDateString()}
        </p>
      </header>
      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />
      {showTaxBreakdown && (
        <footer
          style={{
            borderTop: `1px dashed ${borderColor}`,
            paddingTop: "5px",
            textAlign: alignStyle,
          }}
        >
          <p
            style={{
              margin: "2px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Subtotal:</span>
            <span style={{ fontWeight: "bold" }}>
              {formatCurrency(order.subtotal)}
            </span>
          </p>
          <p
            style={{
              margin: "2px 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Tax:</span>
            <span style={{ fontWeight: "bold" }}>
              {formatCurrency(order.tax)}
            </span>
          </p>
        </footer>
      )}
    </>
  )
);
