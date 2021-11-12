"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the entrypoint of the application.
 * Due to the simplicity of the application, routing is handled here.
 * Similarly cors is handled without any custom configuration.
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cart = require('./apis/get-cart');
const submitOrder = require('./apis/order');
const app = express()
    .use(cors())
    .use(bodyParser.json())
    // Sets the routing directly to the controller.
    .use('/api/cart', cart)
    .use('/api/order', submitOrder);
module.exports = app;
