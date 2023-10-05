import { Router } from "express";
import { check } from "express-validator";
import httpProducto from "../controllers/Producto.js"

const routers = Router();

routers.get('/productobusca', httpProducto.getProductos); 

routers.get('/Productobuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpProducto.getProductosId); 

routers.post('/productocrear', [ 
    check("Codigo", "Ingrese codigo Producto").not().isEmpty(), 
    check("Nombre", "Ingrese nombre Producto").not().isEmpty(), 
    check("Descripcion", "Ingrese descripcion del Producto").not().isEmpty(), 
    check("UnidadMedida", "Ingrese la unidad de medida").not().isEmpty(), 
    check("PrecioUnitario", "Ingrese el precio unitario").not().isEmpty(),
    check("Iva", "Ingrese el iva del producto ").not().isEmpty(),  
    check("Consumible", "Ingrese el consumible").not().isEmpty(), 
], httpProducto.postProductos); 

routers.put('/productomodificar/:id', [ 
    check("Codigo", "Ingrese codigo Producto").not().isEmpty(), 
    check("Nombre", "Ingrese nombre Producto").not().isEmpty(), 
    check("Descripcion", "Ingrese descripcion del Producto").not().isEmpty(), 
    check("UnidadMedida", "Ingrese la unidad de medida").not().isEmpty(), 
    check("PrecioUnitario", "Ingrese el precio unitario").not().isEmpty(),
    check("Iva", "Ingrese el iva del producto ").not().isEmpty(),  
    check("Consumible", "Ingrese el consumible").not().isEmpty(), 
  ], httpProducto.putProductos); 

routers.put('/productoinac/:id', [ 
    check("id", "Digite el id").not().isEmpty().isMongoId(),
], httpProducto.putProductosInactivar);

routers.put('/productoact/:id', [
    check("id", "Digite el id").not().isEmpty().isMongoId(),
], httpProducto.putProductosActivar);

export default routers;