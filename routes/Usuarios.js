import { Router } from "express";
import { check } from "express-validator";
import httpUsuario from "../controllers/Usuarios.js"; 
import validarCampos from "../middelwares/validarcampos.js"

const routers = Router();


routers.get('/usuariobusca', [validarCampos], httpUsuario.getUsuarios); 

routers.get('/usuariobuscaid/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
], httpUsuario.getUsuariosId); 


routers.post('/login', [validarCampos],httpUsuario.login)


routers.post('/usuariocrear', [ 
    check("Nombre", "Ingrese nombre Usuario").not().isEmpty(),
    check("Identificacion", "Ingrese su identificacion").not().isEmpty(),  
    check("telefono", "Ingrese su numero de telefono").not().isEmpty(), 
    check("Correo", "Ingrese su correo").not().isEmpty(),
    check("Contraseña", "Ingrese su contraseña ").not().isEmpty(),  
    check("Rol", "ingrese su rol").not().isEmpty(), 
    validarCampos
], httpUsuario.postUsuarios); 

routers.put('/usuariomodificar/:id', [ 
    check("id", "Digite el id").not().isEmpty(),
    check("Nombre", "Ingrese nombre Usuario").not().isEmpty(),
    check("Identificacion", "Ingrese su identificacion").not().isEmpty(),  
    check("telefono", "Ingrese su numero de telefono").not().isEmpty(), 
    check("Correo", "Ingrese su correo").not().isEmpty(),
    check("Contraseña", "Ingrese su contraseña ").not().isEmpty(),  
    check("Rol", "ingrese su rol").not().isEmpty(), 
    validarCampos
  ], httpUsuario.putUsuarios); 

routers.put('/usuarioinac/:id', [ 
    check("id", "Digite el id").not().isEmpty().isMongoId(),
    validarCampos
], httpUsuario.putUsuariosInactivar);

routers.put('/usuarioact/:id', [
    check("id", "Digite el id").not().isEmpty().isMongoId(),
    validarCampos
], httpUsuario.putUsuariosActivar);

export default routers;