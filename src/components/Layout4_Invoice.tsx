import React from "react";
import { LayoutProps } from "../types/type";
import { ItemTable } from "./ItemTable";

export const Layout4_Invoice: React.FC<LayoutProps> = React.memo(
  ({
    order,
    primaryColor,
    headerText,
    borderColor,
    headerBgColor,
    formatItemTotal,
    sellerName,
    showSignature,
    textColor,
  }) => (
    <div
      style={{
        padding: "15mm 10mm",
        fontSize: "12px",
        minHeight: "270mm",
        border: `1px solid ${borderColor}`,
        boxSizing: "border-box",
        color: textColor,
      }}
    >
      <header
        style={{
          borderBottom: `3px solid ${primaryColor}`,
          paddingBottom: "10px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: headerBgColor,
        }}
      >
        <h1 style={{ fontSize: "24px", margin: 0, color: primaryColor }}>
          INVOICE
        </h1>
        <div style={{ textAlign: "right" }}>
          <p style={{ margin: "2px 0", fontWeight: "bold" }}>
            {headerText || "React Solutions Ltd."}
          </p>
          <p style={{ margin: "2px 0", fontSize: "10px" }}>
            {order.customer.address}
          </p>
          <p style={{ margin: "2px 0", fontSize: "10px" }}>
            Invoice ID: {order.id}
          </p>
        </div>
      </header>
      <section style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "16px",
            borderBottom: `1px solid ${borderColor}`,
            paddingBottom: "5px",
            marginBottom: "10px",
            color: primaryColor,
          }}
        >
          Bill To:
        </h2>
        <p style={{ margin: "2px 0", fontWeight: "bold" }}>
          {order.customer.name}
        </p>
        <p style={{ margin: "2px 0" }}>{order.customer.address}</p>
        <p style={{ margin: "2px 0" }}>{order.customer.phone}</p>
      </section>
      <ItemTable
        items={order.items}
        formatItemTotal={formatItemTotal}
        borderColor={borderColor}
      />
      {showSignature && (
        <div
          style={{
            marginTop: "30px",
            borderTop: "1px dashed #ccc",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-around",
            fontSize: "10px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                height: "30px",
                borderBottom: "1px solid #000",
                marginBottom: "5px",
                width: "150px",
              }}
            ></div>
            <p>Customer Signature</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                height: "30px",
                borderBottom: "1px solid #000",
                marginBottom: "5px",
                width: "150px",
              }}
            ></div>
            <p>Authorized by: {sellerName}</p>
          </div>
        </div>
      )}
    </div>
  )
);
