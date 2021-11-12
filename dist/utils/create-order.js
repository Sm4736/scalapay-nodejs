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
const sqlite_connection_1 = require("../sqlite-connection");
module.exports = {
    /**
     * Retrieves a Cart from the database and loads all associated objects.
     *
     * @param id The ID of the cart that is to be loaded.
     *
     * @returns A single shopping cart with all of the associated product details.
     */
    getCart(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = yield (0, sqlite_connection_1.getCartRepository)();
            return yield repository.findOne(id, { relations: ["products"] });
        });
    },
    /**
     * Takes a Cart object and maps the details to a ScalapayOrder object.
     *
     * @param cart A Cart object that has been loaded from the database.
     * @param order The Order object that will have the totalAmount, items and merchant fields populated.
     *
     * @return order The Order object that was passed in with three fields populated.
     */
    mapCartToScalapayOrder(cart, order) {
        order.totalAmount = {
            amount: cart.amount,
            currency: cart.currency
        };
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
        };
        return order;
    }
};
