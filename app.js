var express = require('express');

var app = express();

app.set("view engine","jade");

app.use(express.static("recursos"));

app.get("/",function(req,res){
	//res.send("hola mundo");
	res.render("index");
});
app.get("/carrito",function(req,res){
	//res.send("hola mundo");
	res.render("carrito");
});
app.get("/desayunos",function(req,res){
	//res.send("hola mundo");
	res.render("desayunos");
});
app.get("/servicios",function(req,res){
	//res.send("hola mundo");
	res.render("servicios");
});
app.get("/mision",function(req,res){
	//res.send("hola mundo");
	res.render("mision");
});
app.get("/vision",function(req,res){
	//res.send("hola mundo");
	res.render("vision");
});
app.get("/eventos",function(req,res){
	//res.send("hola mundo");
	res.render("eventos");
});
app.get("/home",function(req,res){
	//res.send("hola mundo");
	res.render("home");
});

app.get("/login",function(req,res){
	//res.send("hola mundo");
	res.render("login");
});




app.listen(8080);