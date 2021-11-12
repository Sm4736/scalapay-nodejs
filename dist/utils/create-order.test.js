"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createOrder = require('../utils/create-order');
describe("Testing that cart 1 returns an object with two products.", () => {
    it("Load Cart 1", () => __awaiter(void 0, void 0, void 0, function* () {
        const cart = yield createOrder.getCart(1);
        expect(cart.id).toEqual(1);
        expect(cart.products.length).toEqual(2);
    }));
});
// For the purposes of this demonstration, there is only one cart in the database.
describe("Testing that a non-existent cart fails", () => {
    it("Load non-existent cart 2", () => __awaiter(void 0, void 0, void 0, function* () {
        const cart = yield createOrder.getCart(2);
        expect(cart).toBeUndefined();
    }));
});
// Test that cart 1 from the database is being used to populate the order Object.
describe("Testing that an order is properly populated with cart data", () => {
    it("Populate Order object", () => __awaiter(void 0, void 0, void 0, function* () {
        let order = {};
        const cart = yield createOrder.getCart(1);
        order = createOrder.mapCartToScalapayOrder(cart, order);
        expect(order.merchant.redirectCancelUrl).toBeDefined();
        expect(order.items.length).toBe(2);
        expect(order.totalAmount).toBeDefined();
    }));
});
