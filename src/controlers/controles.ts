import {Request, Response} from "express";



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

  export function getProducts(_: Request, res: Response){
      res.send(productos)
  };

  export function getProductsbyprice (req: Request, res: Response){
    const { precios } = req.params;
    const producto_filtrado = productos.filter((producto) => producto.precios > Number(precios));
    res.json(producto_filtrado);
  };
