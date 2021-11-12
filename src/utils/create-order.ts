import {getCartRepository} from "../sqlite-connection";
import {Cart} from "../model/cart";
import {ScalapayOrder} from "../model/order.model";

module.exports = {
    /**
     * Retrieves a Cart from the database and loads all associated objects.
     *
     * @param id The ID of the cart that is to be loaded.
     *
     * @returns A single shopping cart with all of the associated product details.
     */
    async getCart(id): Promise<Cart> {
        const repository = await getCartRepository();
        return await repository.findOne(id, {relations: ["products"]});
    },

    /**
     * Takes a Cart object and maps the details to a ScalapayOrder object.
     *
     * @param cart A Cart object that has been loaded from the database.
     * @param order The Order object that will have the totalAmount, items and merchant fields populated.
     *
     * @return order The Order object that was passed in with three fields populated.
     */
    mapCartToScalapayOrder(cart: Cart, order: ScalapayOrder): ScalapayOrder {
        order.totalAmount = {
            amount: cart.amount,
            currency: cart.currency
        }
        order.items = [];

        // Populate the items list with cart products.
        cart.products.forEach(item => {
            order.items.push({
                category: item.category,
                name: item.name,
                price: {
                    amount: item.amount,
                    currency: item.currency
                },
                quantity: item.quantity,
                sku: item.sku
            });
        });

        // The merchant object informs Scalapay where it should redirect on the success and fail state.
        order.merchant = {
            redirectCancelUrl: 'http://127.0.0.1:3000/api/order/cancelled',
            redirectConfirmUrl: 'http://127.0.0.1:3000/api/order/success'
        }

        return order;
    }
}
