import { DataSource } from "typeorm"
import { Products } from './Products';
import {Users} from "./Users"

// import {Carts} from "./Carts"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "jk",
    entities: [Products,Users]
})

AppDataSource.initialize()
    .then(()=>{console.log("db on")})
    .catch((error)=>{console.log(error)})

.then(async () => {
        // ========== PRODUCTS ==========
        const productRepository = AppDataSource.manager.getRepository(Products);
        const existingProducts = await productRepository.find();

        if (existingProducts.length === 0) {
            const producto1 = new Products("Cup 1", "Descripcion para Cup 1", "Plottable", true);
            const producto2 = new Products("Cup 2", "Descripcion para Cup 2", "Plain", true );
            const producto3 = new Products("Cup 3", "Descripcion para Cup 3", "Plain", true );
            await productRepository.save([producto1, producto2, producto3]);
        }

        console.log("Base inicializada correctamente");

        await AppDataSource.close();
    }).catch((error) => {
        console.log("Error al inicializar la base: ", error)
    });


