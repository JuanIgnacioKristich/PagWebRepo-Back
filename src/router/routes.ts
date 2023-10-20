// Importar el módulo Express
import express, { Request, Response } from 'express';

// Crear un nuevo enrutador
const router = express.Router();

// Definir una ruta para el enrutador
router.get('/', (_: Request, res: Response) => {
  res.send('¡Hola Mundo!');
});

// Exportar el enrutador
export default router;
const app = express();
app.use('../server.ts');
