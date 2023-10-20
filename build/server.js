"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar el módulo Express
const express_1 = __importDefault(require("express"));
// Crear una nueva aplicación Express
const app = (0, express_1.default)();
const port = 8080;
// Definir una ruta para el servidor
app.get('/', (_, res) => {
    res.send('¡Hola Mundo!');
});
// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`El servidor está corriendo en http://localhost:${port}`);
});
