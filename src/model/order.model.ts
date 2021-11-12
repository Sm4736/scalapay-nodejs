import {Item} from "./item.model";
import {Shipping} from "./shipping.model";
import {Customer} from "./customer.model";
import {Price} from "./price.model";

/**
 * This manages all of the Order details as expected by the Scalapay API.
 */
export class ScalapayOrder {
  /**
   * The total price of the order.
   */
  totalAmount?: Price;

  /**
   * The details of the customer.
   */
  consumer: Customer;

  /**
   * The shipping details of the order.
   */
  shipping: Shipping;

  /**
   * The products that were purchased in the order.
   */
  items?: Item[];

  /**
   * The callback details that are required by the Scalapay API.
   */
  merchant?: {
    redirectCancelUrl: string;
    redirectConfirmUrl: string;
  }
}
