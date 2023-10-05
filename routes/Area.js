import { Router } from "express";
import { check } from "express-validator";
import httpArea from "../controllers/Area.js"; 

const routers = Router();

routers.get('/Area', httpArea.getArea); 

routers.get('/Area/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpArea.getAreaId); 

routers.post('/Area/agregar', [ 
    check("nombre", "Nombre del área").not().isEmpty(), 
], httpArea.postArea); 

routers.put('/Area/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("ubicacion", "Ubicación requerida").not().isEmpty(), 
    check("capacidad", "Capacidad requerida").not().isEmpty(), 
], httpArea.putEditarArea); 

routers.put('/inactivarArea/:id', [ // Cambio de /inactivarBus/:id a /inactivarArea/:id
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpArea.putAreaInactivar); // Cambio de rtbuses.putBusInactivar a httpArea.putAreaInactivar
//.
routers.put('/activarArea/:id', [ // Cambio de /activarBus/:id a /activarArea/:id
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpArea.putAreaActivar); // Cambio de rtbuses.putBusActivar a httpArea.putAreaActivar

export default routers;
