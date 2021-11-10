import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Product} from "./product";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    currency: string;

    @OneToMany(() => Product, products => products.cart)
    products: Product[];
}
