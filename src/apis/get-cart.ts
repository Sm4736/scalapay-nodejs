/**
 * This file has both the routing and logic for handling the cart GET.
 */
import {NextFunction, Request, Response, Router} from "express";
import {getCartRepository} from "../sqlite-connection";
import express = require("express");

const router = express.Router();

/**
 * Takes an integer and retrieves the cart that belongs to that user.
 *
 * Accessed via: /api/cart/:id
 */
router.get('/:id', async function (req: Request, res: Response, next: NextFunction) {
    try {
        // Gets the database connection.
        const repository = await getCartRepository();
        // Finds a cart that matches the parameter :id and retrieves it, as well as all products that reference it.
        const cart = await repository.findOne(req.params.id, {relations: ["products"]});

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
