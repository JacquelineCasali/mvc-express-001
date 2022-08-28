const express= require ("express")
const app= express();
const port=3000;
const userRoute=require("./src/routes/userRoute");
const indexRoute=require("./src/routes/indexRoute");
//  configura pasta estatica para acesso externo
app.use(express.static(__dirname+"/public"))
// .set configura configuraçoes do template
// ejs template que esta utilizando
app.set("view engine", "ejs");
// configurando o caminho da pasta views 
app.set("views",__dirname +"/src/views");
app.use(express.json());

app.use(indexRoute);
app.use("/user",userRoute);



app.listen(port,()=>{
console.log("Estamos rodando em: http://localhost:"+ port);
});