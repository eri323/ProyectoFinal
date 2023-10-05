import { Router } from "express";
import { check } from "express-validator";
import httpDistribucionLoteFicha from "../controllers/DistribucionLoteFicha.js"; 

const routers = Router();
routers.get('distruccionLFbusca', httpDistribucionLoteFicha.getDistribucionLoteFicha)

routers.get('distruccionLFbuscaId/:id',[
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
]);

routers.post('/distribucionLFcrear', [ 
  check("Presupuesto", "Cual es el presupuesto").not().isEmpty().isMongoId(), 
  check("DistribucionPresupuesto_id", "Cual es el id presupuesto").not().isEmpty().isMongoId(), 
  check("Fichaid", "Cual es el id ficha").not().isEmpty().isMongoId(), 
],httpDistribucionLoteFicha .postDistribucionLoteFicha); 


routers.put('distribucionLFmodificar/:id',[
  check("id", "Digite el id").not().isEmpty(),
  check("Presupuesto", "Digite el presupuesto").not().isEmpty(),
  check("DistribucionPresupuestoid", "Digite el id del presupuesto").not().isEmpty(),
  check("Fichaid", "Digite la ficha id").not().isEmpty(),
], httpDistribucionLoteFicha.putDistribucionLoteFicha);


routers.put('distribucionLFinac/:id',[
  check("id", "Digite el id").not().isEmpty(),
], httpDistribucionLoteFicha. putDistribucionLoteFichaInactivar);



//Incompleto

export default routers;