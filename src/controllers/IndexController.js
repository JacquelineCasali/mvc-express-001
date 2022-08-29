const indexController={
    home:(req,res)=>{

        return res.render("index",{title:"Home"})
    
    },

products:(req,res)=>{
// estrutura de repetição no ejs
// array de objetos
    const produtos=[
{
    nome:"Camisa Legal",
    preco:"R$ 29,99",
    descricao: "Camisa muito top"
},
{
    nome:"Short Legal",
    preco:"R$ 49,99",
    descricao: "Short muito top"
},
{
    nome:"Calça Estilosa ",
    preco:"R$ 99,99",
    descricao: "Calça da hora"
},
{
    nome:"Bone Paloso ",
    preco:"R$ 99,99",
    descricao: "Bone da hora"
},
    ]
    
return res.render("products",{title:"Produtos",produtos: produtos})
},


login:(req,res)=>{
    return res.render("login",{title:"login"})
},

users:(req,res)=>{
    const users=[
{
    nome:"Henrique",
    Sobrenome:"Serra",
    idade:22
},
{
    nome:"Roberto Carlos",
    Sobrenome:"Silva",
    idade:89
},  
{
    nome:"Augusto",
    Sobrenome:"Souza",
    idade:33
},  
]
 
    // return res.render("users",{title:"Usuários",usuario:users});
    return res.render("users",{title:"Usuários",usuario:[]})

},
};
module.exports=indexController;