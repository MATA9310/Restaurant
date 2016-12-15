const pg = require("pg");
const express = require('express');
const body_parser = require('body-parser');
var app = express();

app.set("view engine","jade");
app.use(express.static("recursos"));
app.use(body_parser.urlencoded({extended:true}));

const user = "postgres";
const pass = "DyJ4S";
const serv = "localhost";
const port = 5432;
const base = "Restaurant";

const conString = "pg://"+user+":"+pass+"@"+serv+":"+port+"/"+base;
var client = new pg.Client(conString);
client.connect();

app.get("/",function(req,res){
	res.render("home");
});
app.get("/home",function(req,res){
	res.render("home");
});
app.get("/carrito",function(req,res){
	res.render("carrito");
});
app.get("/login",function(req,res){
	res.render("login");
});
app.get("/menu/:id",function(req,res){
	var idcategoria=0;
	if (req.params.id == 'Desayunos')
		idcategoria=1;
	if (req.params.id == 'Comidas')
		idcategoria=2;
	if (req.params.id == 'Cenas')
		idcategoria=3;
	if (req.params.id == 'Postres')
		idcategoria=4;
	var query = client.query("SELECT idproducto, nombre, precio FROM producto WHERE idcategoria= "+ idcategoria +" ORDER BY nombre");
	query.on("row", function (row, result) {
    	result.addRow(row);
	});
	query.on("end", function (result) {
		console.log("Consulta realizada")
    	var title=req.params.id;
    	res.render("menu", {titulo: title, json: result.rows} );
	});
});
app.post("/menu/producto",function (req,res) {
	var comida=req.body.idproducto;
	var hambriento=req.body.idusuario;
	console.log("id del producto: " + req.body.idproducto);
	//client.query('INSERT INTO carrito(idusuario, idproducto) values($1, $2)',[comida, hambriento)
});

app.post("/menu/registro",function (req,res) {
	var nombre=req.body.name;
	var correo=req.body.user;
	var contraseña=req.body.pass;

		// var query = client.query("SELECT idproducto, nombre, precio FROM producto WHERE idcategoria= "+ idcategoria +" ORDER BY nombre");
		// query.on("row", function (row, result) {
	 //    	result.addRow(row);
		// });
		// query.on("end", function (result) {
		// 	console.log("Consulta realizada")
	 //    	var title=req.params.id;
	 //    	res.render("menu", {titulo: title, json: result.rows} );
		// });

	client.query('INSERT INTO clientes values('+')')
});
app.post("/menu/accede",function (req,res) {
	var correo=req.body.user;
	var contraseña=req.body.pass;

});

app.get("/servicios",function(req,res){
	res.render("servicios");
});
app.get("/mision",function(req,res){
	res.render("mision");
});
app.get("/vision",function(req,res){
	res.render("vision");
});
app.get("/eventos",function(req,res){
	res.render("eventos");
});

app.listen(8080);

console.log("Servidor activo en el puerto 8080");