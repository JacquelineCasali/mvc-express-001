var express=require("express");
var router = express.Router();
const userController=require("../controllers/UserController");
// get pegar dados, ou seja leitura
// post - cadastrar /salvar dados 
// patch/put -atualizar dados
// delete - deletar dados 

router.get("/", userController.index);
router.get("/:id",userController.show);
router.post("/",userController.store);
router.post("/save/:id/:name?",userController.save);
router.patch("/:id",userController.update);
router.put("/:id",userController.update);
router.delete("/:id",userController.delete);




module.exports = router;