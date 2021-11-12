import express = require("express");
import {NextFunction, Request, Response} from "express";
import {ScalapayOrder} from "../model/order.model";
import {Cart} from "../model/cart";

const router = express.Router();
const axios = require('axios')
const createOrder = require('../utils/create-order')

// The config headers required by the staging Scalapay server.
const config = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer qhtfs87hjnc12kkos'
    }
}

/**
 * Accepts completed checkout pages that contain the Customer information and Shipping details.
 */
router.post('/submit', async function (req: Request, res: Response, next: NextFunction) {
    // Initialise the Order Object with the Customer and Shipping information.
    // This data should be checked server side.
    let order: ScalapayOrder = req.body;
    // Get the shopping cart associated with the user.
    const cart: Cart = await createOrder.getCart(req.body.cartId);
    // Pay the order with the cart details stored in the database.
    order = createOrder.mapCartToScalapayOrder(cart, order);

    // After packing the order, send it across to Scalapay.
    axios.post('https://staging.api.scalapay.com/v2/orders', JSON.stringify(order),  config)
        .then(scalapayResponse => {
            res.send(JSON.stringify(scalapayResponse.data.checkoutUrl));
        })
        .catch( error => {
            console.error(error);
            res.sendStatus(500);
        })
});

export = router;
