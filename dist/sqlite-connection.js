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
exports.getCartRepository = void 0;
/**
 * This file handles the connection to the sqlite database using the typeorm library.
 */
const typeorm_1 = require("typeorm");
const cart_1 = require("./model/cart");
const product_1 = require("./model/product");
let connection;
/**
 * Sets up a connection if one has yet to be created.
 * If no database exists then one will be created without data.
 *
 * @returns A promise that can be used to access the sqlite database.
 */
function getCartRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        if (connection === undefined) {
            connection = yield (0, typeorm_1.createConnection)({
                type: "sqlite",
                database: "src/data/widgets.sqlite",
                entities: [
                    cart_1.Cart,
                    product_1.Product
                ],
                synchronize: true,
            });
        }
        return connection.getRepository(cart_1.Cart);
    });
}
exports.getCartRepository = getCartRepository;
