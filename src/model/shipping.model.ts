/**
 * This is used to store the shipping details for an order as expected by the Scalapay API.
 */
export class Shipping {
  /**
   * The name of the addressee.
   */
  name: string;

  /**
   * The first line of the shipping address.
   */
  line1: string;

  /**
   * The suburb of the shipping address.
   */
  suburb: string;

  /**
   * The postcode of the shipping address.
   */
  postcode: string;

  /**
   * The country code of the shipping address.
   */
  countryCode: string;
}
