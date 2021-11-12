/**
 * The customer object as expected by the Scalapay API.
 */
export class Customer {
  /**
   * The given name(s) of the customer.
   */
  givenNames: string;

  /**
   * The surname of the customer.
   */
  surname: string;
  /**
   * The phone number of the customer.
   */
  phoneNumber: string;

  /**
   * The email of the customer.
   */
  email: string;
}
