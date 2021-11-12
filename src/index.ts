/**
 * This is the entrypoint of the application.
 * Due to the simplicity of the application, routing is handled here.
 * Similarly cors is handled without any custom configuration.
 */
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const cart = require('./apis/get-cart');
const submitOrder = require('./apis/order');
const app = express()
.use(cors())
.use(bodyParser.json())

// Sets the routing directly to the controller.
.use('/api/cart', cart)
.use('/api/order', submitOrder);

module.exports = app;
