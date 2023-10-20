// Importar el módulo Express
import express from "express";

// Crear una nueva aplicación Express
const app = express();
const port = 8081
// Definir una ruta para el servidor


// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`El servidor está corriendo en http://localhost:${port}`)
});
