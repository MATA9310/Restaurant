$( document ).ready(function() {
	var sesion=document.getElementById('inicio');
    if(localStorage.secion=1)
    	sesion.innerText='Entrar/Registrar';
    else
    	sesion.innerText=localStorage.usuario;
});

function carro(caja) {
	console.log("click");
		$.ajax({
	  		method: "POST",
	  		url: "/menu/producto",
	  		data: { idproducto: caja.getAttribute('name'), idusuario: localStorage.idusuario}
	})
}

function registro() {
	var nombre=document.getElementById('Rnombre').value;
	var coreo1=document.getElementById('Rcorreo').value;
	var coreo2=document.getElementById('cor-select').options[combo.selectedIndex].value;
	var contra=document.getElementById('Rcontraseña').value;
	var correo=coreo1+coreo2;
	$.ajax({
	  	method: "POST",
	  	url: "/login/registro",
	  	data: { name: nombre, user: correo, pass: contra }
	})
}

function login() {
	var coreo1=document.getElementById('lcorreo').value;
	var coreo2=document.getElementById('lcor-select').options[combo.selectedIndex].value;
	var contra=document.getElementById('contraseña').value;
	var correo=coreo1+coreo2;
	$.ajax({
	  	method: "POST",
	  	url: "/menu/accede",
	  	data: { user: correo, pass: contra }
	})
}
// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });