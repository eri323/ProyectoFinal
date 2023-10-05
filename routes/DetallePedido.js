import  {Router} from "express";
import { check } from "express-validator";
import httpDetallePedido from "../controllers/DetallePedido.js";


const routers = Router()

routers.get('detallepedidobusca', httpDetallePedido.getDetallePedidos);

routers.get('DetallePedido/:id', [

  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpDetallePedido.getDetallePedido);

routers.post('/detallepedidocrear',[
  check("Cantidad", "Cual es la cantidad").not().isEmpty().isMongoId(), 
  check("Pedido_id", "Digite el pedidoId").not().isEmpty().isMongoId(),
  check("Producto_id", "Digite el productoId").not().isEmpty().isMongoId(),
], httpDetallePedido.postDetallePedido);

routers.put('/detallepedidobuscaid/:id',[
  check("id", "Digite el id").not().isEmpty().isMongoId(), 
  check("Cantidad", "Es necesaria una cantidad").not().isEmpty(),
  check("Pedido_id", "Es necesario el id del pedido").not().isEmpty().isMongoId(),  
  check("Producto_id", "Digite el producto id").not().isEmpty().isMongoId(), 
], httpDetallePedido.putEditarDetallePedido);

routers.put('detallepedidoinac/:id',[
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpDetallePedido.putDetallePedidoInactivar)

routers.put('/detallepedidoact/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpDetallePedido.putDetallePedidoActivar); 


export default routers;