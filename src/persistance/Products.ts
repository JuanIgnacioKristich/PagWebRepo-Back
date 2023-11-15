import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName!: string

    @Column()
    Price!: string

    @Column()
    Descripcion!: string

    @Column()
    isActive?: boolean
}


