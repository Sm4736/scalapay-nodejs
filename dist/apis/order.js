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
const express = require("express");
const router = express.Router();
const axios = require('axios');
const createOrder = require('../utils/create-order');
// The config headers required by the staging Scalapay server.
const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer qhtfs87hjnc12kkos'
    }
};
/**
 * Accepts completed checkout pages that contain the Customer information and Shipping details.
 */
router.post('/submit', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // Initialise the Order Object with the Customer and Shipping information.
        // This data should be checked server side.
        let order = req.body;
        // Get the shopping cart associated with the user.
        const cart = yield createOrder.getCart(req.body.cartId);
        // Pay the order with the cart details stored in the database.
        order = createOrder.mapCartToScalapayOrder(cart, order);
        // After packing the order, send it across to Scalapay.
        axios.post('https://staging.api.scalapay.com/v2/orders', JSON.stringify(order), config)
            .then(scalapayResponse => {
            res.send(JSON.stringify(scalapayResponse.data.checkoutUrl));
        })
            .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
    });
});
module.exports = router;
