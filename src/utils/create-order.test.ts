import {ScalapayOrder} from "../model/order.model";

const createOrder = require('../utils/create-order');

describe("Testing that cart 1 returns an object with two products.", () => {
    it("Load Cart 1", async () => {
        const cart = await createOrder.getCart(1);
        expect(cart.id).toEqual(1);
        expect(cart.products.length).toEqual(2);
    });
});

// For the purposes of this demonstration, there is only one cart in the database.
describe("Testing that a non-existent cart fails", () => {
    it("Load non-existent cart 2", async () => {
        const cart = await createOrder.getCart(2);
        expect(cart).toBeUndefined();
    });
});

// Test that cart 1 from the database is being used to populate the order Object.
describe("Testing that an order is properly populated with cart data", () => {
    it("Populate Order object", async() => {
        let order: ScalapayOrder = {} as ScalapayOrder;
        const cart = await createOrder.getCart(1);
        order = createOrder.mapCartToScalapayOrder(cart, order);

        expect(order.merchant.redirectCancelUrl).toBeDefined();
        expect(order.items.length).toBe(2);
        expect(order.totalAmount).toBeDefined();
    });
});
