import { Router } from "express";
import { check } from "express-validator";
import httpFicha from "../controllers/Ficha.js"; 

const routers = Router();

routers.get('/fichabusca', httpFicha.getFichas); 

routers.get('/fichabuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
], httpFicha.getFichaById); 

routers.post('/fichacrear', [ 
    check("CodigoFicha", "Ingrese codigo ficha").not().isEmpty(), 
    check("Nombre", "Ingrese nombre ficha").not().isEmpty().isMongoId, 
    check("NivelFormacion", "Ingrese NivelFormacion").not().isEmpty().isMongoId, 
    check("FechaInicio", "Ingrese Fecha Inicio").not().isEmpty().isMongoId,
    check("FechaFin", "Ingrese Fecha Fin ").not().isEmpty().isMongoId,  
    check("Area_Id", "Ingrese Area_Id").not().isEmpty().isMongoId, 
], httpFicha.postFicha); 

routers.put('/fichamodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("CodigoFicha", "Ingrese CodigoFicha").not().isEmpty().isMongoId, 
    check("Nombre", "Ingrese Nombre").not().isEmpty().isMongoId, 
    check("NivelFormacion", "Ingrese Nivel de formacion").not().isEmpty().isMongoId, 
    check("FechaInicio", "Ingrese Fecha Inicio").not().isEmpty().isMongoId,
    check("FechaFin", "Ingrese Fecha Fin ").not().isEmpty().isMongoId,  
    check("Area_Id", "Ingrese Area_Id").not().isEmpty().isMongoId, 
  ], httpFicha.putFicha); 

routers.put('/fichainac/:id', [ 
    check("id", "Digite el id").not().isEmpty().isMongoId(),
], httpFicha.putFichaInactivar);

routers.put('/fichaact/:id', [
    check("id", "Digite el id").not().isEmpty().isMongoId(),
], httpFicha.putFichaActivar);

export default routers;
