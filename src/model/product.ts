/**
 * Defines the Product entity in the sqlite database.
 *
 * In this setup a Product is designed to represent an item in the cart,
 * not the canonical product that we would expect to be displayed on a product page.
 * This means that a cart contained two of the same product there would be two separate instances of the product.
 * It works this way for ease of implementation on the front end, we're just assuming 1 quantity of each product.
 */
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Cart} from "./cart";

@Entity()
export class Product {
    /**
     * Arbitrary Id for the primary key.
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * Product name.
     */
    @Column()
    name: string;

    /**
     * Product category.
     */
    @Column()
    category: string;

    /**
     * Product sku.
     */
    @Column()
    sku: string;

    /**
     * Price of the object stored as an integer.
     */
    @Column()
    amount: number;

    /**
     * The currency code of the price.
     */
    @Column()
    currency: string;

    /**
     * The cart that this product belongs to.
     */
    @ManyToOne(() => Cart, cart => cart.products)
    cart: Cart;
}
