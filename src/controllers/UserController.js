// inportnado o objeto da pasta data do arquivo users
//  transancionar dados o .json
var users=require("../data/users.json");
// transformando o objeto em array da chave data
users=users.data;
 
// CRUD
// CREATE - Criar 
// read - ler 
// update-atualizar
// delete - deletar
// read - ler / listar todos os usuarios pode filtrar eles
var users=require("../data/users.json");
users=users.data;
const userController= {
index:(req,res)=>{
    // listar os usuarios
    // .json retorna o objeto para o front and 
    // listar via objeto
   return res
//.status(200) siginifica que a requisição foi realizado com sucesso
   .status(200)
//    data - dados
   .json({data:users, message:"listagem realizada com sucesso"});
        } ,
        

// read - ler apenas um usuario

show:(req,res)=>{ 
    const { id }= req.params
    // const result=users.find() buscar resultado
    const result=users.find((user)=>{
// return user.id === id;
// transformar de numero para string  
// return user.id.toString() === id;
// transformar de string em numero inteiro  
user.id === parseInt(id);
     })
// (!result) negação
    
if(!result){
    return res
    // .status(400) mensagem de erro
    .status(400)
    .json({message:"Nenhum usuário encontrado"})
}
return res .status(200)
.json({data:result, message:"Usuario encontrado"})

},
// CREATE - Criar um usuario novo 
// receber parametro via express envia para back and
store:(req,res)=>{ 
const {nome, sobrenome, email,idade}=req.body;
// para validação
// ! é negação 
if(!nome||!sobrenome ||!email||!idade){
    return res.status(400)
    .json({message:"Preencha todos os campos"})
}
users.push({
// length pega a quantidade de usuarios e soma 1
id:users.length + 1,
nome,
sobrenome,
email,
idade})
// fora do banco de dados a alteração é desfeita 
// req.body corpo da requisição
// res.status(201) criado
res.status(201).json({Messange: "Usúario Criado com sucesso"});
},

// update-atualizar um usuario
// junçao do store com o show 
    update:(req,res)=>{
    const {id}= req.params
    // store const com o nome
    const {nome, sobrenome, email,idade}=req.body;
    // show
    const result=users.find((user)=>
        user.id === parseInt(id)   );
         if(!result){
         return res
        // .status(400) mensagem de erro
         .status(400)
         .json({message:"Nenhum usuário encontrado"})
        }
     const newUser= result;
     if(nome) newUser.nome=nome;
     if(sobrenome) newUser.sobrenome=sobrenome;
     if(email) newUser.email=email;
     if(idade) newUser.idade=idade;
return res.status(200).json({message:"Atualização realizada com sucesso"})
},


// delete - deletar um usuario
//  semelhante ao show busca pelo usuario e faz e verificação
delete:(req,res)=>{ 
    const {id}= req.params;
    const result =users.findIndex(
        (users)=>
        users.id===parseInt(id)
    );
    if(result===-1){
        return res.status(400)
        .json({message:"Nenhum Usuario encontrado"});
    }
    users.splice(result,1); 
   return res.status (200)
   .json({message: "Usuario deletado com sucesso"});
    
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