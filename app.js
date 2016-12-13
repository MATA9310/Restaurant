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



app.listen(8080);