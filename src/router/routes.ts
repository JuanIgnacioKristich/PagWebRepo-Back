import express from 'express';



interface productoYmercancia{

  nombre: string;
  precios: number;
  modelo: string;
  paisOrigen: string;
}
  


let productos: productoYmercancia[]  =[
 {
   nombre:"",
   modelo:"",
   precios: 1500 ,
   paisOrigen:""
  

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
 

},
{
  nombre:"",
  modelo:"",
  precios:6,
  paisOrigen:""
 

}

]

const router = express.Router();

router.get('/productos', (_, res) => {
  res.json(productos);
  console.log(productos)
});


router.get('/productos/precios/:precios', (req, res) => {
  const { precios } = req.params;
  const producto_filtrado = productos.filter((producto) => producto.precios > Number(precios));
  res.json(producto_filtrado);
});


router.put('/productos/:modelo', (req, res) => {
  const { modelo } = req.params;
  const { nombre, precios, paisOrigen } = req.body;
  const index = productos.findIndex((producto) => producto.modelo === modelo);

  if (index !== -1) {
    productos[index] = { nombre, precios, modelo, paisOrigen };
    res.json(productos[index]);
  } 
    
  else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});
// router.get('/productos/precio/:precio', (req, res) => {
//   const { precio } = req.params;
//   const filteredProductos = productos.filter((producto) => producto.precio === Number(precio));
//   res.json(filteredProductos);
// });

// router.get('/productos/pais/:paisOrigen', (req, res) => {
//   const { paisOrigen } = req.params;
//   const filteredProductos = productos.filter((producto) => producto.paisOrigen === paisOrigen);
//   res.json(filteredProductos);
// });

// router.post('/productos', (req, res) => {
//   const { nombre, precio, modelo, paisOrigen } = req.body;
  
//   if (!nombre || !precio || !modelo || !paisOrigen) {
//     return res.status(400).json({ message: 'Faltan campos obligatorios' });
//   }

//   productos.push({ nombre, precio, modelo, paisOrigen });
  
//   return res.json(productos[productos.length -1]);
// });


export default router;