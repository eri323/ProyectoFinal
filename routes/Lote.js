import { Router } from "express";
import { check } from "express-validator";
import httpLote from "../controllers/Lote.js";

const routers = Router();

routers.get('/lotebusca', httpLote.getLote);

routers.get('/lotebuscaid/:id', [
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpLote.getLoteId);

routers.post('/lotecrear', [
  check("nombre", "Nombre del área").not().isEmpty(),
], httpLote.postLote);

routers.put('/lotemodificar/:id', [
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
  check("Nombre", "Digite el nombre").not().isEmpty(),
], httpLote.putLote);

routers.put('/loteinac/:id', [
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpLote.putLoteInactivar);

routers.put('/loteact/:id', [
  check("id", "Digite el id").not().isEmpty(),
  check("id", "Digite el id").isMongoId(),
], httpLote.putLoteActivar);

export default routers;
