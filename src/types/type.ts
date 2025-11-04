import React from "react";
import { ReceiptContentComponent } from "../components/ReceiptContentComponent";

export interface Item {
  name: string;
  price: number;
  quantity: number;
}
export interface CustomField {
  key: string;
  value: string;
}
export interface Customer {
  name: string;
  address: string;
  phone: string;
  email: string;
}
export interface Order {
  id: string;
  date: number;
  items: Item[];
  subtotal: number;
  tax: number;
  total: number;
  customer: Customer;
  customFields: CustomField[];
  notes?: string;
}

// --- Package Props Interface ---
export interface PrintOptions {
  layout: number;
  alignment: "start" | "center" | "end";
  primaryColor: string;
  textColor: string;
  borderColor: string;
  headerBgColor: string;
  baseFontSize: number;
  paperSize: string;
  fontFamily: string;
  logoUrl: string;
  headerText: string;
  footerText: string;
  sellerName: string;
  showSignature: boolean;
  showTaxBreakdown: boolean;
  customCss: string;
}

export interface LayoutProps extends PrintOptions {
  order: Order;
  alignStyle: "left" | "center" | "right";
  formatItemTotal: (item: Item) => string;
}

export const formatCurrency = (amount: number): string =>
  `$${(amount / 100).toFixed(2)}`;
export interface ReceiptContentProps extends PrintOptions {
  order: Order;
}
export const ReceiptContent = React.memo(ReceiptContentComponent);
export interface DemoContainerProps {
  title: string;
  children: React.ReactNode;
}
