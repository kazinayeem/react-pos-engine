import React, { useState, useMemo } from "react";
import {
  Layout,
  Printer,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Droplet,
  Ruler,
  PenTool,
  Zap,
  Percent,
} from "lucide-react";
import { Order, PrintOptions } from "./types/type";
import { PAPER_SIZES } from "./utils/size";
import { useReceiptPrint } from "react-pos-engine";

// 🧮 --- Helper Functions ---
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
  }).format(value);

const calculateTotals = (
  items: Order["items"]
): { subtotal: number; tax: number; total: number } => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.075); // 7.5% VAT for demo
  const total = subtotal + tax;
  return { subtotal, tax, total };
};

// 🧾 --- Mock Order for Demo ---
const MOCK_ORDER: Order = {
  id: "R-739482",
  date: Date.now(),
  items: [
    { name: "Gemini-Flash T-Shirt (M)", price: 3500, quantity: 1 },
    { name: "Tailwind CSS Sticker Pack", price: 500, quantity: 2 },
    { name: "Function Component Mug", price: 1200, quantity: 1 },
    { name: "React Hook Pin", price: 800, quantity: 4 },
    { name: "Firebase Sticker", price: 200, quantity: 1 },
  ],
  subtotal: 7500,
  tax: 563,
  total: 8063,
  customer: {
    name: "Apollo Client",
    address: "404 Hook Lane, Dev City",
    phone: "555-555-GEMINI",
    email: "apollo@dev.com",
  },
  customFields: [
    { key: "Cashier ID", value: "JaneDoe-007" },
    { key: "Order Type", value: "Delivery" },
  ],
};

const App: React.FC = () => {
  // --- STATE ---
  const [order, setOrder] = useState<Order>(MOCK_ORDER);
  const [layout, setLayout] = useState<number>(4);
  const [alignment, setAlignment] =
    useState<PrintOptions["alignment"]>("center");

  const [primaryColor, setPrimaryColor] = useState("#2563EB");
  const [textColor, setTextColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#CCCCCC");
  const [headerBgColor, setHeaderBgColor] = useState("transparent");
  const [baseFontSize, setBaseFontSize] = useState(9);
  const [paperSize, setPaperSize] = useState("58mm");
  const [fontFamily, setFontFamily] = useState("Consolas, monospace");

  const [logoUrl, setLogoUrl] = useState("");
  const [headerText, setHeaderText] = useState("THE REACT STORE");
  const [footerText, setFooterText] = useState("THANK YOU - COME AGAIN!");
  const [sellerName, setSellerName] = useState("SAM SMITH");
  const [showSignature, setShowSignature] = useState(false);
  const [showTaxBreakdown, setShowTaxBreakdown] = useState(true);
  const [customCss, setCustomCss] = useState(
    "/* Add your custom print CSS here */"
  );

  // --- Derived Data ---
  const totals = useMemo(() => calculateTotals(order.items), [order.items]);
  const orderWithTotals = useMemo(
    () => ({ ...order, ...totals }),
    [order, totals]
  );

  const printOptions = useMemo<PrintOptions>(
    () => ({
      layout,
      alignment,
      primaryColor,
      textColor,
      borderColor,
      headerBgColor,
      baseFontSize,
      paperSize,
      fontFamily,
      logoUrl,
      headerText,
      footerText,
      sellerName,
      showSignature,
      showTaxBreakdown,
      customCss,
    }),
    [
      layout,
      alignment,
      primaryColor,
      textColor,
      borderColor,
      headerBgColor,
      baseFontSize,
      paperSize,
      fontFamily,
      logoUrl,
      headerText,
      footerText,
      sellerName,
      showSignature,
      showTaxBreakdown,
      customCss,
    ]
  );

  // --- Custom Hook ---
  const { printReceipt, ReceiptContent } = useReceiptPrint(
    orderWithTotals,
    printOptions
  );

  // --- Handlers ---
  const handlePrint = () => printReceipt();

  const updateItemName = (index: number, newName: string) => {
    const newItems = order.items.map((item, i) =>
      i === index ? { ...item, name: newName } : item
    );
    setOrder({ ...order, items: newItems });
  };

  const updateCustomerData = (key: "name" | "address", value: string) => {
    setOrder({ ...order, customer: { ...order.customer, [key]: value } });
  };

  const updateCustomField = (
    index: number,
    keyOrValue: "key" | "value",
    newValue: string
  ) => {
    const newFields = order.customFields.map((field, i) =>
      i === index ? { ...field, [keyOrValue]: newValue } : field
    );
    setOrder({ ...order, customFields: newFields });
  };

  const alignButtonStyle = (alignValue: PrintOptions["alignment"]) => {
    const isActive = alignment === alignValue;
    return `px-3 py-2 text-sm font-medium rounded-lg flex items-center justify-center transition-colors duration-150 ${
      isActive
        ? "bg-indigo-600 text-white shadow-md"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;
  };

  const currentPaper = PAPER_SIZES["a4"] || PAPER_SIZES["58mm"];

  // --- Render ---
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center font-sans">
      <style>{`
        .input-style { padding: 8px; border: 1px solid #e5e7eb; border-radius: 8px; width: 100%; transition: all 0.15s ease-in-out; font-size: 0.875rem; }
        .input-style:focus { border-color: ${primaryColor}; box-shadow: 0 0 0 3px rgba(59,130,246,0.4); outline: none; }
        .editor-section { padding: 16px; border-radius: 10px; background-color: #f9fafb; border: 1px solid #e5e7eb; margin-bottom: 20px; }
        .editor-title { font-weight: 700; color: #1f2937; margin-bottom: 10px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; font-size: 1.125rem; }
      `}</style>

      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-xl p-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          POS Printing Library Live Editor
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* --- Left Side: Editor --- */}
          <div className="lg:col-span-2">
            {/* You already have the full UI from your code here, unchanged */}
            {/* Keep your editor panels and fields as before */}
          </div>

          {/* --- Right Side: Live Preview --- */}
          <div className="lg:col-span-1 bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center sticky top-0 h-fit">
            <h2 className="text-xl font-semibold text-white mb-4">
              Live Preview ({currentPaper.name})
            </h2>

            <div className="bg-white shadow-xl p-4 rounded-b-lg overflow-y-auto w-full flex justify-center">
              <ReceiptContent order={orderWithTotals} {...printOptions} />
            </div>

            <div className="mt-6 w-full">
              <div
                className="flex justify-between text-xl font-bold border-t border-gray-600 pt-3 mb-4"
                style={{ color: primaryColor }}
              >
                <span>TOTAL:</span>
                <span>{formatCurrency(orderWithTotals.total)}</span>
              </div>
              <button
                onClick={handlePrint}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-150 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Printer className="w-5 h-5 mr-2" /> Print Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
