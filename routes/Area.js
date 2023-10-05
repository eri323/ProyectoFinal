import { Router } from "express";
import { check } from "express-validator";
import httpArea from "../controllers/Area.js"; 

const routers = Router();

routers.get('/areabusca', httpArea.getArea); 

routers.get('/areabuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpArea.getAreaId); 

routers.post('/areacrear', [ 
    check("nombre", "Nombre del área").not().isEmpty(), 
], httpArea.postArea); 

routers.put('/areamodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    check("ubicacion", "Ubicación requerida").not().isEmpty(), 
    check("capacidad", "Capacidad requerida").not().isEmpty(), 
], httpArea.putArea); 

routers.put('/areainac/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpArea.putAreaInactivar); 

routers.put('/areaact/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpArea.putAreaActivar);

export default routers;
