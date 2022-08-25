const express= require ("express")
const app= express();
const port=3000;
const userRoute=require("./src/routes/userRoute");

app.use(express.json())

app.use(userRoute);


app.listen(port,()=>{
console.log("Estou rodando na porta:"+ port);
});