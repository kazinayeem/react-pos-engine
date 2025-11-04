export { useReceiptPrint } from "./hooks/useReceiptPrint";
export type { Order, PrintOptions } from "./types/type";
export type { PaperSizeKey } from "./utils/size";
export declare const PAPER_SIZES: Record<"58mm" | "80mm" | "100mm" | "a4" | "letter", {
    width: string;
    name: string;
}>;
