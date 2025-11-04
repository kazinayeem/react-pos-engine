import React from "react";
import { LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout6_Kitchen: React.FC<LayoutProps> = React.memo(
  ({ order, primaryColor, borderColor }) => (
    <>
      <header
        style={{
          borderBottom: `2px solid ${primaryColor}`,
          paddingBottom: "5px",
          marginBottom: "10px",
        }}
      >
        <h1 style={{ fontSize: "1.6em", margin: "5px 0", color: primaryColor }}>
          KITCHEN ORDER TICKET
        </h1>
        <p style={{ margin: "2px 0" }}>
          Order #:{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            {order.id}
          </span>
        </p>
        <p style={{ margin: "2px 0" }}>
          Time: {new Date().toLocaleTimeString()}
        </p>
      </header>
      <ItemTable
        items={order.items}
        formatItemTotal={() => ""}
        borderColor={borderColor}
        hidePrice={true}
      />
      <p
        style={{
          fontSize: "1.2em",
          marginTop: "20px",
          borderTop: `1px solid ${primaryColor}`,
          paddingTop: "5px",
        }}
      >
        <span style={{ fontWeight: "bold", color: "red" }}>NOTES:</span> COOK
        WELL
      </p>
    </>
  )
);
