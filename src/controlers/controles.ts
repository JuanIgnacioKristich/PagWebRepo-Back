// import  axios  from "axios";
import {Request, Response} from "express";
import { syncBuiltinESMExports } from "module";
import	{Db} from "../persistance/db"
// import { MetadataAlreadyExistsError } from "typeorm";


interface productoYmercancia{

    nombre: string;
    precios: number;
    modelo: string;
    paisOrigen: string;
  }
    
  
  
  let productos: productoYmercancia[]  =[
   {
     nombre:"calc",
     modelo:"ford",
     precios: 1500 ,
     paisOrigen:"Alemania"
    
  
  },
  {
    nombre:"",
    modelo:"nissan",
    precios:6,
    paisOrigen:"Argentina"
   
  
  },
  {
    nombre:"",
    modelo:"",
    precios:6,
    paisOrigen:""
   
  
  },
  {
    nombre:"",
    modelo:"",
    precios:6,
    paisOrigen:""
   
  
  }
  
  ]

  export const getAll=async() => {
    await Db.getAll();
  }


  export function getProducts(_: Request, res: Response){
      res.send(productos)
  };

  export function getProductsbyprice (req: Request, res: Response){
    const { precios } = req.params;
    const producto_filtrado = productos.filter((producto) => producto.precios > Number(precios));
    res.json(producto_filtrado);
  };


  // export function FormUser(req: Request, res: Response){
  //   const {firstName, Price, Descripcion, id } = req.body;
  //   if (!firstName || !Price || !id || !Descripcion) {
        
  //       return res.status(400).json({ message: 'Faltan campos obligatorios' });
        
    
  // }
  // router.post('/productos', (req, res) => {
//   const { nombre, precios, modelo, paisOrigen } = req.body;
  
//   if (!nombre || !precios || !modelo || !paisOrigen) {
//     return res.status(400).json({ message: 'Faltan campos obligatorios' });
//   }

//   productos.push({ nombre, precios, modelo, paisOrigen });
  
//   return res.json(productos[productos.length -1]);
