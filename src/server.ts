// Importar el módulo Express
import express from "express";
import router from "./router/routes";
import "reflect-metadata"
// Crear una nueva aplicación Express
const app = express();
const port = 8080
// Definir una ruta para el servidor
app.use("/", router)

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`)
});
