import React from "react";
import { Item } from "../types/type";

export const ItemTable: React.FC<{
  items: Item[];
  formatItemTotal: (item: Item) => string;
  borderColor: string;
  hidePrice?: boolean;
}> = React.memo(
  ({ items, formatItemTotal, borderColor, hidePrice = false }) => (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "left",
        marginBottom: "10px",
        fontSize: "inherit",
      }}
    >
      <thead>
        <tr
          style={{
            borderTop: `1px dashed ${borderColor}`,
            borderBottom: `1px dashed ${borderColor}`,
          }}
        >
          <th style={{ textAlign: "left", padding: "3px 0", width: "15%" }}>
            QTY
          </th>
          <th
            style={{
              textAlign: "left",
              padding: "3px 0",
              width: hidePrice ? "85%" : "60%",
            }}
          >
            ITEM
          </th>
          {!hidePrice && (
            <th style={{ textAlign: "right", padding: "3px 0", width: "25%" }}>
              TOTAL
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td style={{ textAlign: "left", padding: "2px 0" }}>
              {item.quantity}
            </td>
            <td style={{ textAlign: "left", padding: "2px 0" }}>{item.name}</td>
            {!hidePrice && (
              <td style={{ textAlign: "right", padding: "2px 0" }}>
                {formatItemTotal(item)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
);
