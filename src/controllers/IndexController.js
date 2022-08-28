const indexController={
home:(req,res)=>{

    return res.render("index",{title:"Home"})

},
products:(req,res)=>{
    return res.render("products",{title:"products"})
},
login:(req,res)=>{
    return res.render("login",{title:"login"})
},
};
module.exports=indexController;