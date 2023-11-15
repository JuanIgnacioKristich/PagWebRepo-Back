import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Carts{
    @PrimaryGeneratedColumn()
    id!:number


    @Column()
    UserName!: string


    


}