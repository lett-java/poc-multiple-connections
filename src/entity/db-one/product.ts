import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ database: "db-one" })
export class Product {

    @PrimaryGeneratedColumn()
    id?: number; 

    @Column()
    name!: string;

    @Column()
    category: string;

    @Column()
    quantity: number;
}