/**
 * The price object as expected by the Scalapay API.
 */
export class Price {
    /**
     * The cost of the item.
     * Format: 20.00
     */
    amount: string;

    /**
     * The currency of the product.
     * Format: EUR
     */
    currency: string;
}
