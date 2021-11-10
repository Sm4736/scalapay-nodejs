import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Cart} from "./cart";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    sku: string;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @ManyToOne(() => Cart, cart => cart.products)
    cart: Cart;
}
