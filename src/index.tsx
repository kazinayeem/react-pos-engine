// index.ts
export { useReceiptPrint } from "./hooks/useReceiptPrint";
export type { Order, PrintOptions } from "./types/type";
export type { PaperSizeKey } from "./utils/size";
export const PAPER_SIZES: Record<
  "58mm" | "80mm" | "100mm" | "a4" | "letter",
  { width: string; name: string }
> = {
  "58mm": { width: "58mm", name: "POS (58mm)" },
  "80mm": { width: "80mm", name: "POS (80mm)" },
  "100mm": { width: "100mm", name: "Wide POS (100mm)" },
  a4: { width: "210mm", name: "Standard (A4)" },
  letter: { width: "216mm", name: "Letter (8.5in)" },
};
