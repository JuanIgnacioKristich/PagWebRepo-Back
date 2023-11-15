import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id:number


    @Column()
    UserName: string


    @Column()
    Password: string


    @Column()
    Email: string


    @Column()
    Address: string

    


}