# 🧾 React POS Engine

<div align="center">

![React POS Engine](https://img.shields.io/badge/React-POS%20Engine-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Node](https://img.shields.io/badge/Node-v14+-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Author](https://img.shields.io/badge/Author-Kazi%20Nayeem-orange)
![Company](https://img.shields.io/badge/Company-Bornosoft%20RN-purple)

</div>

<div align="center">
  <h3>A Professional POS Receipt Generator for React Applications</h3>
  <p>Developed with ❤️ by <a href="https://github.com/kazinayeem">Kazi Nayeem</a> | <a href="https://bornosoftnr.com/">Bornosoft RN</a></p>
</div>

## Overview

React POS Engine is your complete solution for POS and invoice printing in React applications. Built with TypeScript and modern best practices, it offers:

- 🖨️ **Print-Ready Templates**: 20 professional templates for various business needs
- 🎨 **Customization**: Full control over styling, layouts, and branding
- 📱 **Responsive**: Works with any paper size from 58mm POS rolls to A4
- 🚀 **Simple Integration**: Easy-to-use React Hook (`useReceiptPrint`)
- 💪 **Type-Safe**: Built with TypeScript for reliable development

## 📑 Table of Contents

1. [✨ Features](#-features)
2. [🛠️ System Requirements](#️-system-requirements)
3. [📦 Getting Started](#-getting-started)
   - [Installation](#installation)
   - [Basic Setup](#basic-setup)
4. [� Usage Guide](#-usage-guide)
   - [Quick Start](#quick-start)
   - [Configuration Options](#configuration-options)
5. [📋 API Reference](#-api-reference)
   - [Type Definitions](#type-definitions)
   - [Hooks Documentation](#hooks-documentation)
6. [🎨 Layout Templates](#-layout-templates)
7. [🤝 Contributing](#-contributing)
8. [📄 License](#-license)

---

## ✨ Features

### Core Capabilities

#### 📑 Template System

- **20 Professional Layouts**
  - Retail POS receipts
  - Restaurant orders and kitchen tickets
  - Service invoices and estimates
  - Digital receipts and e-commerce
  - Specialized formats (gift receipts, returns)

#### 🎨 Styling & Customization

- **Brand Identity Control**
  - Custom colors and typography
  - Logo placement options
  - Flexible layout adjustments
- **CSS Flexibility**
  - Direct CSS customization
  - Theme support
  - Responsive design

#### 🖨️ Print Management

- **Paper Size Support**
  - 58mm/80mm POS rolls
  - A4/Letter documents
  - Custom size configuration
- **Professional Output**
  - Controlled print dialog
  - Preview functionality
  - High-quality rendering

#### 💻 Developer Tools

- **TypeScript Integration**
  - Full type safety
  - IntelliSense support
  - Documentation
- **React Integration**
  - Hooks-based API
  - Preview components
  - Real-time updates

---

## 🛠️ System Requirements

### Required Software

- **Node.js**: v14 or higher
- **React**: v16.8+ (Hooks support required)
- **Browser**: Modern browser with ES6 support

### Development Environment

- TypeScript 4.0+ (recommended)
- npm, yarn, or pnpm
- VS Code (recommended for TypeScript support)

### Optional Tools

- Chrome DevTools for print preview
- React Developer Tools for component debugging

## 📦 Getting Started

### Installation

Install the package using your preferred package manager:

```bash
# Using npm
npm install react-pos-engine

# Using yarn
yarn add react-pos-engine

# Using pnpm
pnpm add react-pos-engine
```

### Basic Setup

1. **Import the Package**

```typescript
import { useReceiptPrint } from "react-pos-engine";
```

2. **Configure Types** (TypeScript)

```typescript
import type { Order, PrintOptions } from "react-pos-engine";
```

3. **Add to Your Project**

```typescript
// See usage examples below for implementation details
```

## � Usage Guide

### Quick Start

The `useReceiptPrint` hook is the core of React POS Engine. It handles:

- Receipt data processing
- Style customization
- Print dialog management
- Preview rendering

### Example Data Structure

```typescript
// Example mock order for testing
const MOCK_ORDER: Order = {
  id: "BRN-2023001",
  date: Date.now(),
  items: [
    { name: "Premium T-Shirt (L)", price: 2999, quantity: 1 },
    { name: "Bornosoft Sticker Pack", price: 499, quantity: 2 },
    { name: "Developer Mug", price: 1499, quantity: 1 },
    { name: "React Native Pin", price: 799, quantity: 3 },
    { name: "Tech Sticker", price: 299, quantity: 2 },
  ],
  subtotal: 7892,
  tax: 789,
  total: 8681,
  customer: {
    name: "Kazi Nayeem",
    address: "123 Tech Avenue, Dhaka",
    phone: "+880-1234567890",
    email: "contact@bornosoftrn.com",
  },
  customFields: [
    { key: "Cashier", value: "NAYEEM-001" },
    { key: "Order Type", value: "In-Store" },
    { key: "Member", value: "Gold" },
  ],
  notes: "Thank you for shopping with Bornosoft!",
  loyaltyPoints: 100,
};
```

### Basic Implementation Example

````tsx
import React, { useMemo } from 'react';
import { useReceiptPrint, type Order, type PrintOptions } from 'react-pos-engine';

const ReceiptPrintButton = ({ currentOrder }: { currentOrder: Order }) => {
  const printOptions: PrintOptions = useMemo(() => ({
    layout: 2,                // Layout 2: Detailed POS w/ Custom Fields
    alignment: 'center',
    primaryColor: '#2563EB',
    textColor: '#000000',
    paperSize: '80mm',       // Standard 80mm receipt paper
    customCss: '',          // Optional custom styles
    baseFontSize: 12,
    fontFamily: 'Arial',
  }), []);

  const { printReceipt, ReceiptContent } = useReceiptPrint(currentOrder, printOptions);

  return (
    <div>
      {/* Preview Component (Optional) */}
      <ReceiptContent order={currentOrder} {...printOptions} />

      {/* Print Trigger Button */}
      <button
        onClick={printReceipt}
        disabled={!currentOrder.items.length}
      >
        Print Receipt
      </button>
    </div>
  );
};

export default ReceiptPrintButton;





## 📋 API Reference

### Type Definitions

#### 🛍️ Order Interface
The core data structure for receipt content:

```typescript
interface Item {
  name: string;
  price: number;      // in cents
  quantity: number;
}

interface Customer {
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface Order {
  id: string;
  date: number;       // Timestamp
  items: Item[];
  subtotal: number;
  tax: number;
  total: number;
  customer: Customer;
  customFields: Array<{
    key: string;
    value: string;
  }>;
  notes: string;
  loyaltyPoints?: number;
}
````

#### ⚙️ PrintOptions Interface

Customize the appearance and behavior of your receipts:

````typescript
interface PrintOptions {
  layout: number;     // 1-20 (see layouts table below)
  paperSize: '58mm' | '80mm' | '100mm' | 'a4' | 'letter';
  alignment: 'start' | 'center' | 'end';
  primaryColor: string;
  baseFontSize: number;
  fontFamily: string;
  textColor?: string;
  logoUrl?: string;
  sellerName?: string;
  showSignature?: boolean;
  showTaxBreakdown?: boolean;
  showCustomerPhone?: boolean;
  showNotes?: boolean;
  customCss?: string;
}



## 🎨 Layouts (1–16)

This project ships a curated set of professional layouts tailored to common POS, restaurant, e-commerce and invoicing needs. You can switch between them by setting the `layout` property in `PrintOptions` (1–16). Below is a concise, developer-friendly reference so you can pick the right layout quickly.

How to switch: pass `layout` to the `useReceiptPrint` hook or `ReceiptContent` component.

```tsx
// Switch to layout 9
const options = { layout: 9, /* other options */ };
<ReceiptContent order={order} {...options} />
```

Summary of layouts (1–16):

- 1 — Classic POS: Clean retail receipt with clear totals and store header; ideal for small shops.
- 2 — Modern Grid / Detailed POS: Wider layout with custom fields and extended details for professional receipts.
- 3 — Dark Mode / Minimalist: Compact, low-ink design focused on essentials and fast printing.
- 4 — Standard Invoice (A4): Full A4 invoice with billing section, signature block and totals — suitable for formal invoices.
- 5 — Stacked Summary: Emphasizes order summary blocks and large total display for quick checks.
- 6 — Kitchen Ticket: No prices, large quantities and simple lines for kitchen staff printing.
- 7 — Promotion / Pickup Slip: Promotional banner area and prominent offer blocks — good for marketing slips.
- 8 — Financial Invoice: Finance-style layout with clear reference and date blocks for accounting copies.
- 9 — Sleek Underline: Modern receipt with decorative underlines and strong typographic hierarchy.
- 10 — Pill Header: Rounded pill-style header for stylish, attention-grabbing tickets.
- 11 — Split Header: Two-column split header for reference/customer info and time, ideal for service tickets.
- 12 — Boxed Summary: Totals wrapped in boxed panels — great for returns/credit slips.
- 13 — Item Emphasis: Emphasizes item names and per-item totals for clarity in detailed receipts.
- 14 — E-Commerce / Shipping: Includes shipping block, tracking ID and customer address for online orders.
- 15 — Minimalist POS: A very spare, readable layout for compact printers and mobile receipts.
- 16 — Vibrant Tropical: Color-forward template with accent bands — useful for brands that want visual flair.

Pro tip: layouts 1–3 and 9–16 are optimized for typical POS roll widths (58/80mm); layout 4 targets A4/Letter documents and will be rendered as a full-page invoice.

Demo screenshot

You provided a demo screenshot; include it in docs like this for marketing or README usage:

![Demo Screenshot](https://i.ibb.co.com/6RCnnhNp/Screenshot-2025-11-04-200216.png)

If the image doesn't render, try uploading the file to a public host (Imgur / i.ibb.co) and replace the link above.

Quick examples — switching layout programmatically

```tsx
// Example: change layout at runtime in your app
const [layout, setLayout] = useState<number>(1);

// toggling
<select value={layout} onChange={(e) => setLayout(Number(e.target.value))}>
  {Array.from({ length: 16 }).map((_, i) => (
    <option key={i} value={i + 1}>Layout {i + 1}</option>
  ))}
</select>

// pass to hook / component
const options = { layout };
<ReceiptContent order={order} {...options} />
```

Advanced styling and customization

- Colors: set `primaryColor` and `borderColor` in `PrintOptions`.
- Paper sizes: use `paperSize` (`58mm`, `80mm`, `a4`, etc.). Layout 4 (A4 invoice) is rendered full-page.
- Brand: supply `logoUrl`, `headerText`, and `sellerName` to tailor the output.

Want a gallery page? See `src/components/DemoContainer.tsx` — you can create a small `LayoutGallery` component that renders `ReceiptContent` for layouts 1–16 to let stakeholders preview all templates. (This is a recommended next step.)

---


## 🤝 Contributing

### How to Contribute

We love your input! We want to make contributing to React POS Engine as easy and transparent as possible.

1. 🍴 Fork the repository
2. 🌿 Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
````

3. 💻 Make your changes
4. ✅ Commit with clear messages
   ```bash
   git commit -m 'Add: Amazing Feature'
   ```
5. 🚀 Push to your branch
   ```bash
   git push origin feature/AmazingFeature
   ```
6. 🔄 Open a Pull Request

### Reporting Issues

Found a bug? We're here to help! Please include:

#### For Bug Reports 🐛

- Detailed description of the problem
- Clear steps to reproduce
- Expected vs actual behavior
- Environment details:
  - React version
  - Browser & version
  - Node.js version
  - Operating system

#### For Feature Requests 💡

- Clear use case description
- Example scenarios
- Potential implementation ideas (optional)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

If you find this project helpful, please consider:

- Giving it a star ⭐
- Sharing it with others 🔄
- Contributing to its improvement 🤝

---

<div align="center">
Crafted with ❤️ by <a href="https://github.com/kazinayeem">Kazi Nayeem</a> at <a href="https://bornosoftnr.com/">Bornosoft RN</a>

[Documentation](https://bornosoftrn.com/docs/react-pos-engine) ·
[Report Bug](https://github.com/kazinayeem/react-pos-engine/issues) ·
[Request Feature](https://github.com/kazinayeem/react-pos-engine/issues) ·
[npm Package](https://www.npmjs.com/package/react-pos-engine)

</div>

<div align="center">
  <sub>If this project helped you, please consider giving it a ⭐️</sub>
</div>
```
