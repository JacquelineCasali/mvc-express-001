//CRUD - toda entidade da plataforma possiu sempre o CRUD - EXEMPLO usuario
//Create - Criar 
//Read - Ler 
//Update - Atualizar 
//Delete - Deletar
const userController={
    //read index 
 // Ler/Listar todos os usuarios e pode filtrar eles
index:(req,res)=>{
    const users=[
        {
            id:1,
            nome:"Henrique",
        },
        {
            id:2,
            nome:"Paula",
        },
    ]; // retornar objeto 
    res.json({data:users});// data padrão de back and
},
// Read -shoe 
//ler apenas um usuario
show:(req,res)=>{
    const {id}= req.params;
    res.send('show ${id}');
},
//create -store
// cria um usuario
store:(req,res)=>{
    res.send("store")
},
//update 
//atualizar um usuario
update:(req,res)=>{
    const {id}= req.params;
    res.send('update ${id}')
},
//delete 
//deleta um usuario
delete:(req,res)=>{
    const {id}= req.params;
    res.send("delete ${id}")
},
save: (req,res)=>{
    const {id,name}= req.params;
    if(name){
        res.send('save${id} e ${name}');
    }else{
        res.send('save ${id}');
    }
    }

};

module.exports=userController