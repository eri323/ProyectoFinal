import { Router } from "express";
import { check } from "express-validator";
import httpDetallePedido from "../controllers/DetallePedido.js";

const router =  new Router()

router.get('/detallepedidobusca',httpDetallePedido.getDetallePedidos)

router.get('/detallepedidobuscaid/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
],httpDetallePedido.getDetallePedido);

router.post('/detallepedidocrear', [
    check('Cantidad', 'Cantidad del detalle de pedido').not().isEmpty(),
    check('Pedido_id', 'ID del pedido').not().isEmpty(),
    check('Producto_id', 'ID del producto').not().isEmpty(),
], httpDetallePedido.postDetallePedido);

router.put('/detallepedidomodificar/:id', [
    check('id', 'Digite el ID').not().isEmpty(),
    check('id', 'Digite un ID válido').isMongoId(),
    check('Cantidad', 'Cantidad del detalle de pedido').not().isEmpty(),
    check('Pedido_id', 'ID del pedido').not().isEmpty(),
    check('Producto_id', 'ID del producto').not().isEmpty(),
], httpDetallePedido.putEditarDetallePedido);

router.put('/detallepedidoinac/:id', [
    check('id', 'Digite el ID').not().isEmpty(),
    check('id', 'Digite un ID válido').isMongoId(),
    validarCampos
], httpDetallePedido.putDetallePedidoInactivar);

router.put('/detallepedidoact/:id', [
    check('id', 'Digite el ID').not().isEmpty(),
    check('id', 'Digite un ID válido').isMongoId(),
    validarCampos
], httpDetallePedido.putDetallePedidoActivar);


export default router