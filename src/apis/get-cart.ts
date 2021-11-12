/**
 * This file has both the routing and logic for handling the cart GET.
 */
import {NextFunction, Request, Response, Router} from "express";
import express = require("express");

const router = express.Router();
const createOrder = require('../utils/create-order');

/**
 * Takes an integer and retrieves the cart that belongs to that user.
 *
 * Accessed via: /api/cart/:id
 */
router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
    try {
        // Get the cart details from the database.
        const cart = await createOrder.getCart(req.params.id);

        // If the cart is empty we should just return a 404.
        if (typeof cart !== 'undefined') {
            res.send(cart);
        } else {
            res.sendStatus(404);
        }
    }
    catch (err) {
        return next(err);
    }
});

export = router;
