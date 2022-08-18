const userController= {

// CRUD
// CREATE - Criar 
// read - ler 
// update-atualizar
// delete - deletar
// read - ler / listar todos os usuarios pode filtrar eles
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
    ];
    res.json({data:users});
},
// read - ler apenas um usuario
show:(req,res)=>{ 
    const { id }= req.params
res.send(`show ${id}`);
},
// CREATE - Criar um usuario
store:(req,res)=>{ 
    res.send("store");
},
// update-atualizar um usuario
update:(req,res)=>{
    const {id}= req.params
    res.send(`update ${id}`);
},
// delete - deletar um usuario
delete:(req,res)=>{ 
    const {id}= req.params
res.send(`delete ${id}`);
},
save:(req,res)=>{
    const {id,name}= req.params;
    if(name){
        res.send(`Save ${id} e ${name}`);
    } else{
        res.send(`Save ${id}`);
    }
    }
};
     
module.exports=userController;