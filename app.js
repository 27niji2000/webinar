var express=require('express')

const server=express();
server.set("view engine","ejs")

server.get("/",function(req,res){
    res.render("login")

})
server.get("/home",function(req,res){
    res.render("home")
})
server.get("/aboutus",function(req,res){
    res.render("aboutus")
})
server.get("/services",function(req,res){
    res.render("services")
})
server.get("/login",function(req,res){
   res.send("login page")
})
server.post("/validate",function(req,res){
    res.render("home")
})
server.listen(8000,function(){
    console.log("server started ")
})