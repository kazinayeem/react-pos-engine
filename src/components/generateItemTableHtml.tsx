import { formatCurrency, Item } from "../types/type";

export const generateItemTableHtml = (
  items: Item[],
  borderColor: string,
  hidePrice: boolean
): string => {
  const priceHeaders = hidePrice
    ? ""
    : '<th style="text-align: right; padding: 3px 0; width: 25%;">TOTAL</th>';
  const itemRows = items
    .map(
      (item) => `
    <tr>
        <td style="text-align: left; padding: 2px 0;">${item.quantity}</td>
        <td style="text-align: left; padding: 2px 0;">${item.name}</td>
        ${
          hidePrice
            ? ""
            : `<td style="text-align: right; padding: 2px 0;">${formatCurrency(
                item.price * item.quantity
              )}</td>`
        }
    </tr>
  `
    )
    .join("");

  return `
    <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: inherit; color: inherit;">
        <thead>
            <tr style="border-top: 1px dashed ${borderColor}; border-bottom: 1px dashed ${borderColor};">
                <th style="text-align: left; padding: 3px 0; width: 15%;">QTY</th>
                <th style="text-align: left; padding: 3px 0; width: ${
                  hidePrice ? "85%" : "60%"
                };">ITEM</th>
                ${priceHeaders}
            </tr>
        </thead>
        <tbody>${itemRows}</tbody>
    </table>
  `;
};
