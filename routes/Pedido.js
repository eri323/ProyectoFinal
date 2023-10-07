import { Router } from "express";
import { check } from "express-validator";
import httpPedido from "../controllers/Pedido.js"; 
import validarCampos from "../middelwares/validarcampos.js"

const routers = Router();

routers.get('/pedidobusca', [validarCampos],httpPedido.getPedidos); 

routers.get('/pedidoabuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpPedido.getPedidosId); 

routers.post('/pedidocrear', [ 
    check("FechaCreacion", "Se necesita la fecha de creacion").not().isEmpty(), 
    check("FechaEntrega", "Se necesita la fecha de entrega").not().isEmpty(), 
    check("IdDistribucionLoteFicha", "Se necesita la IdDistribucionLoteFicha").not().isEmpty(), 
    check("Subtotal", "Se necesita el subtotal").not().isEmpty(), 
    check("Total", "Se necesita el total").not().isEmpty(), 
    validarCampos
  ], httpPedido.postPedidos); 

routers.put('/pedidosmodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("FechaCreacion", "Se necesita la fecha de creacion").not().isEmpty(), 
    check("FechaEntrega", "Se necesita la fecha de entrega").not().isEmpty(), 
    check("IdDistribucionLoteFicha", "Se necesita la IdDistribucionLoteFicha").not().isEmpty().isMongoId(), 
    check("Subtotal", "Se necesita el subtotal").not().isEmpty(), 
    check("Total", "Se necesita el total").not().isEmpty(), 
    validarCampos
], httpPedido.putPedidos); 

routers.put('/pedidosinac/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpPedido.putPedidosInactivar); 

routers.put('/pedidosact/:id', [
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpPedido.putPedidosActivar);

export default routers;
