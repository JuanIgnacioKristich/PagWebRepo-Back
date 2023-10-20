import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_: Request, res: Response) => {
  res.send('¡Hola Mundo 123451235!');
});


export default router;