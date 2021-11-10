/**
 * Defines the Cart entity in the sqlite database.
 *
 * We are storing the total price and currency in this table as that is both easier and realistic.
 * The cart relationship to products is one-to-many because the product table is meant to represent unique
 * copies of a product in this cart, as opposed to store stock.
 * It saves us a nasty many-to-many relationship or a third table.
 */
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Product} from "./product";

@Entity()
export class Cart {
    /**
     * Arbitrary Id for the primary key.
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * The total price of the cart.
     */
    @Column()
    amount: number;

    /**
     * The currency code of the total price.
     */
    @Column()
    currency: string;

    /**
     * Defines a one to many relationship between the cart and products.
     * Notably, this does not create a reciprocal foreign key, only the Products table gets a fkey to Cart.id.
     */
    @OneToMany(() => Product, products => products.cart)
    products: Product[];
}
