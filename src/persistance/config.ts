import { DataSource } from "typeorm"
import { Products } from './Products';

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [Products, Users, Carts]
})

AppDataSource.initialize()