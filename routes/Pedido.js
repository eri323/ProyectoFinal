import { Router } from "express";
import { check } from "express-validator";
import httpPedido from "../controllers/Pedido.js"; 

const routers = Router();

routers.get('/pedidobusca', httpPedido.getPedidos); 

routers.get('/pedidoabuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpPedido.getPedidosId); 

routers.post('/pedidoscrear', [ 
    check("FechaCreacion", "Se necesita la fecha de creacion").not().isEmpty(), 
    check("FechaEntrega", "Se necesita la fecha de entrega").not().isEmpty(), 
    check("IdDistribucionLoteFicha", "Se necesita la IdDistribucionLoteFicha").not().isEmpty(), 
    check("Subtotal", "Se necesita el subtotal").not().isEmpty(), 
    check("Total", "Se necesita el total").not().isEmpty(), 
  ], httpPedido.postPedidos); 

routers.put('/pedidosmodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty().isMongoId(),
    check("FechaCreacion", "Se necesita la fecha de creacion").not().isEmpty(), 
    check("FechaEntrega", "Se necesita la fecha de entrega").not().isEmpty(), 
    check("IdDistribucionLoteFicha", "Se necesita la IdDistribucionLoteFicha").not().isEmpty().isMongoId(), 
    check("Subtotal", "Se necesita el subtotal").not().isEmpty(), 
    check("Total", "Se necesita el total").not().isEmpty(), 
], httpPedido.putPedidos); 

routers.put('/pedidosinac/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpPedido.putPedidosInactivar); 

routers.put('/pedidosact/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpPedido.putPedidosActivar);

export default routers;
