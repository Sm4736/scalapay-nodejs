import {Connection, createConnection, Repository} from "typeorm";
import {Cart} from "./model/cart";
import {Product} from "./model/product";

let connection: Connection;

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
