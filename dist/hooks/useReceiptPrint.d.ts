import { Order, PrintOptions } from "../types/type";
export declare const useReceiptPrint: (orderData: Order, options: PrintOptions) => {
    printReceipt: () => void;
    ReceiptContent: import("react").NamedExoticComponent<import("../types/type").ReceiptContentProps>;
};
