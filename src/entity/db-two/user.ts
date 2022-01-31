import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({database: "db-two"})
export class User {
    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name!: string;

    @Column()
    age!: number;

    @Column()
    email!: string;
    

}