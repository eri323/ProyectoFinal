import { Router } from "express";
import { check } from "express-validator";
import httpItemPresupuesto from "../controllers/ItemPresupuesto.js"; 

const routers = Router();

routers.get('/itempresupuestobusca', httpItemPresupuesto.getItemPresupuesto); 

routers.get('/itempresupuestoid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpItemPresupuesto.getItemPresupuestoId); 

routers.post('/itempresupuestocrear', [ 
    check("nombre", "Nombre del área").not().isEmpty(), 
    check("Presupuesto", "Digite el nombre del presupuesto").not().isEmpty(), 
], httpItemPresupuesto.postItemPresupuesto); 

routers.put('/itempresupuestomodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty().isMongoId(),
    check("presupuesto", "Presupuesto es requerido").not().isEmpty(), 
    check("distribucionpresupuestoid", "Distribucion presupuesto es requerido").not().isEmpty(),
    check("fichaid", "La ficha id es requerida ").not().isEmpty().isMongoId(),  
], httpItemPresupuesto.putItemPresupuesto); 

routers.put('/itempresupuestoinac/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpItemPresupuesto.putItemPresupuestoInactivar); 

routers.put('/itempresupuestoact/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpItemPresupuesto.putItemPresupuestoActivar);

export default routers;
