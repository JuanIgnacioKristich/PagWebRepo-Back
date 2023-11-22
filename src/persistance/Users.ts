import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id!:number


    @Column()
    UserName: string


    @Column()
    Password: string


    @Column()
    Email: string


    @Column()
    Address: string


    constructor(UserName:string, Password:string, Email:string, Address:string){
        this.UserName=UserName;
        this.Password=Password;
        this.Email=Email;
        this.Address=Address;
    }


}

