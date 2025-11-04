import React from "react";
import { formatCurrency, LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const LayoutPlaceholder: React.FC<{ layoutNum: number } & LayoutProps> =
  React.memo(
    ({
      layoutNum,
      order,
      primaryColor,
      borderColor,
      headerBgColor,
      showTaxBreakdown,
      alignStyle,
    }) => (
      <div
        style={{
          padding: "10px",
          border: `1px dashed ${borderColor}`,
          textAlign: "center",
          margin: "10px 0",
          backgroundColor: headerBgColor,
        }}
      >
        <h3
          style={{ margin: "5px 0", color: primaryColor }}
        >{`Layout ${layoutNum} - Modern POS Style`}</h3>
        <p
          style={{ margin: "2px 0", fontSize: "0.8em" }}
        >{`Description for Layout ${layoutNum} goes here...`}</p>
        <ItemTable
          items={order.items.slice(0, 2)}
          formatItemTotal={(item) => formatCurrency(item.price * item.quantity)}
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
          </footer>
        )}
      </div>
    )
  );
