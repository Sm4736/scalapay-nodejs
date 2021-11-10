/**
 * This file handles the connection to the sqlite database using the typeorm library.
 */
import {Connection, createConnection, Repository} from "typeorm";
import {Cart} from "./model/cart";
import {Product} from "./model/product";

let connection: Connection;

/**
 * Sets up a connection if one has yet to be created.
 * If no database exists then one will be created without data.
 *
 * @returns A promise that can be used to access the sqlite database.
 */
export async function getCartRepository(): Promise<Repository<Cart>> {
    if (connection === undefined) {
        connection = await createConnection({
            type: "sqlite",
            database: "src/data/widgets.sqlite",
            entities: [
                Cart,
                Product
            ],
            synchronize: true,
        });
    }
    return connection.getRepository(Cart);
}
