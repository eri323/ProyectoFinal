import { Router } from "express";
import { check } from "express-validator";
import httpDistribucionPresupuesto from "../controllers/DistribucionPresupuesto.js"; 

const routers = Router();

routers.get('/dispresupuestobusca', httpDistribucionPresupuesto.getDistribucionPresupuesto); 

routers.get('/dispresupuestobuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpDistribucionPresupuesto.getDistribucionPresupuestoId); 

routers.post('/dispresupuestocrear', [ 
    check("presupuesto", "Nombre del área").not().isEmpty(), 
    check("lote_id", "se necesita el lote presupuesto").not().isEmpty(), 
    check("itempresupuestoid", "se necesita el itempresupuestoid").not().isEmpty(), 
  ], httpDistribucionPresupuesto.postDistribucionPresupuesto); 

routers.put('/dispresupuestomodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpDistribucionPresupuesto.putDistribucionPresupuesto); 

routers.put('/dispresupuestoinac/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpDistribucionPresupuesto.putDistribucionPresupuestoInactivar); // Cambio de rtbuses.putBusInactivar a httpDistribucionPresupuesto.putAreaInactivar

routers.put('/dispresupuestoact/:id', [ // Cambio de /activarBus/:id a /activarArea/:id
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpDistribucionPresupuesto.putDistribucionPresupuestoActivar);

export default routers;
