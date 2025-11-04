import React from "react";
import { Item } from "../types/type";
export declare const ItemTable: React.FC<{
    items: Item[];
    formatItemTotal: (item: Item) => string;
    borderColor: string;
    hidePrice?: boolean;
}>;
