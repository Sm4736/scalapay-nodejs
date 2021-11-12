import {Price} from "./price.model";

/**
 * The Product as expected by the Scalapay API.
 */
export class Item {
  /**
   * The name of the product.
   */
  name: string;

  /**
   * The SKU of the product.
   */
  sku: string;

  /**
   * The product category.
   */
  category: string;

  /**
   * The price and currency type of the product.
   */
  price: Price;

  /**
   * The quantity of Products.
   */
  quantity: number;
}
