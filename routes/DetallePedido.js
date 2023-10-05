import  {Router} from "express";
import { check } from "express-validator";
import httpDetallePedido from "../controllers/DetallePedido";
import { route } from "express/lib/application";

const routers = Router()

routers.get('DetallePedido', httpDetallePedido.getDetallePedidos);

routers.get('DetallePedido/:id', [

  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpDetallePedido.getDetallePedido);

routers.post('/DetallePedido/agregar',[
  check("Cantidad", "Cual es la cantidad").not().isEmpty().isMongoId(), 
  check("Pedido_id", "Digite el pedidoId").not().isEmpty().isMongoId(),
  check("Producto_id", "Digite el productoId").not().isEmpty().isMongoId(),
], httpDetallePedido.postDetallePedido);

routers.put('/DetallePedido/:id',[
  check("id", "Digite el id").not().isEmpty().isMongoId(), 
  check("Cantidad", "Es necesaria una cantidad").not().isEmpty().isMongoId(),
  check("Pedido_id", "Es necesario el id del pedido").not().isEmpty().isMongoId(),  
  check("Producto_id", "Digite el producto id").not().isEmpty().isMongoId(), 
], httpDetallePedido.putEditarDetallePedido);

routers.put('inactivardetallepedido/:id',[
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpDetallePedido.putDetallePedidoInactivar)

routers.put('/activardetallepedido/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpDetallePedido.putDetallePedidoActivar); 


export default routers;