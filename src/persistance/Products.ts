import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName: string

    @Column()
    Price: string

    @Column()
    Descripcion: string

    @Column()
    isActive: boolean

    constructor(firstName:string, Price:string, Descripcion:string, isActive: boolean){
        this.firstName=firstName;
        this.Price=Price;
        this.Descripcion=Descripcion;
        this.isActive=isActive;
    }
}


