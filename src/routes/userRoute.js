const express= require("express");
const router= express.Router();
const userController=require("../controllers/UserController")


// metodos principais são 
// GET - Pegar dados, ou seja,  leitura 
//POST - Cadastrar/salvar dados
//PATCH/ PUT - Atualizar dados
//DELETE - Deletar dados

router.get("/",userController.index); // lista de usuario
router.get("/:id",userController.show); //:id parametro dinamico
router.post("/", userController.store);
router.post("/", userController.store);
router.patch("/save/:id/:name?",userController.save);
router.put("/:id",userController.update);
router.delete("/:id",userController.delete);

module.exports=router;