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
const sqlite_connection_1 = require("../sqlite-connection");
const express = require("express");
const router = express.Router();
/**
 * Takes an integer and retrieves the cart that belongs to that user.
 *
 * Accessed via: /api/cart/:id
 */
router.get('/:id', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Gets the database connection.
            const repository = yield (0, sqlite_connection_1.getCartRepository)();
            // Finds a cart that matches the parameter :id and retrieves it, as well as all products that reference it.
            const cart = yield repository.findOne(req.params.id, { relations: ["products"] });
            // If the cart is empty we should just return a 404.
            if (typeof cart !== 'undefined') {
                res.send(cart);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch (err) {
            return next(err);
        }
    });
});
module.exports = router;
