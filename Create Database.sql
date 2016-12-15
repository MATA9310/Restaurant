CREATE TABLE categoria(
    idcategoria integer NOT NULL,
    tipo character varying(8) NOT NULL,
	PRIMARY KEY(idcategoria));
CREATE TABLE producto(
    idproducto integer NOT NULL,
    idcategoria integer NOT NULL,
    nombre character varying(30) NOT NULL,
    precio integer NOT NULL,
	PRIMARY KEY(idproducto),
	FOREIGN KEY  (idcategoria)REFERENCES categoria(idcategoria));
CREATE TABLE clientes(
    idcliente integer NOT NULL,
    correo character varying(50),
	PRIMARY KEY(idcliente));
	
CREATE TABLE venta(
    idventa integer NOT NULL,
    fecha date NOT NULL,
    total money NOT NULL,
    idcliente   integer NOT NULL,
	PRIMARY KEY(idventa),
	FOREIGN KEY(idcliente) REFERENCES clientes(idcliente));
CREATE TABLE comercio(
    idventa integer NOT NULL,
    idproducto    integer NOT NULL,
	FOREIGN KEY(idventa) REFERENCES venta(idventa),
	FOREIGN KEY(idproducto) REFERENCES producto(idproducto));
	

	
CREATE TABLE nombre(
    idcliente integer NOT NULL,
    nombre character varying(60) NOT NULL,
    ape_pat character varying(60),
    ape_mat character varying(60),
	FOREIGN KEY(idcliente) REFERENCES clientes(idcliente));
	
CREATE TABLE direccion(
    idcliente integer NOT NULL,
    calle character varying(50) NULL,
    colonia character varying(50) NOT NULL,
    ciudad character varying(50) NOT NULL,
	FOREIGN KEY(idcliente) REFERENCES clientes(idcliente));
CREATE TABLE tarjeta(
    idcliente integer NOT NULL,
    numero character varying(16),
    mes_ven integer NOT NULL,
    anio_ven integer NOT NULL,
	FOREIGN KEY(idcliente) REFERENCES clientes(idcliente));
CREATE TABLE telcliente(
    idcliente integer NOT NULL,
    telefono  character varying(30) NOT NULL,
	FOREIGN KEY(idcliente) REFERENCES clientes(idcliente));
	
	insert into categoria values (1,'Desayuno');
	insert into categoria values (2,'Comida');
	insert into categoria values (3,'Cena');
	insert into categoria values (4,'Postre');

	insert into clientes values (1,'hola123@hotmail.com');
	insert into clientes values (2,'soy_yo@gmail.com');
	insert into clientes values (3,'angel_23@gmail.com');
	insert into clientes values (4,'soli_rs@hotmail.com');
	insert into clientes values (5,'pino_loco@gmail.com');

	insert into producto values (1,1,'sandwich',35);
	insert into producto values (2,1,'omelet',50);
	insert into producto values (3,2,'pollo en adobo',89);
	insert into producto values (4,3,'filete marinado',120);
	insert into producto values (5,2,'pollo en salsa roja',85);
	insert into producto values (6,2,'sopa de verduras',60);
	insert into producto values (7,1,'enchiladas',60);
	insert into producto values (8,4,'panque de naranja',35);
	insert into producto values (9,4,'pay de piña',50);
	insert into producto values (10,4,'pastel de zanahoria',89);
	insert into producto values (11,3,'pechuga a la parrilla',120);
	insert into producto values (12,2,'pollo a la naranja',85);
	insert into producto values (13,1,'sopa de cebolla',60);
	insert into producto values (14,1,'ensalada de frutas',60);

	insert into venta values(1,'02/11/2016',300,1);
	insert into venta values(2,'02/11/2016',450,5);
	insert into venta values(3,'16/11/2016',303,2);
	insert into venta values(4,'22/11/2016',380,3);
	insert into venta values(5,'30/11/2016',560,4);
	insert into venta values(6,'02/12/2016',375,4);

	insert into comercio values (1,5);
	insert into comercio values (2,1);
	insert into comercio values (3,4);
	insert into comercio values (4,7);
	insert into comercio values (5,6);

	insert into nombre values (1,'Francisco','Lopez','Morales');
	insert into nombre values (2,'Dulce Celiflora','Ruiz','Vasquez');
	insert into nombre values (3,'Elba','Zurita','Mendez');
	insert into nombre values (4,'Elver','Galarte','Perez');
	insert into nombre values (5,'Stefi','Errondo','Palmonte');

	insert into direccion values (1,'Av Siempre viva','Sprinfield','Oaxaca');
	insert into direccion values (2,'Carretera San felipe del agua','Centro','Oaxaca');
	insert into direccion values (3,'Lugubre','Vicente Guerrero','Oaxaca');
	insert into direccion values (4,'Peru','America Sur','Oaxaca');
	insert into direccion values (5,'Plutarco Elias Calles','Mineria','Oaxaca');

	insert into tarjeta values (1,'5579099006830526',09,17);
	insert into tarjeta values (2,'5579099006870645',11,20);
	insert into tarjeta values (3,'5579099000785821',12,18);
	insert into tarjeta values (4,'5579099009975075',05,20);
	insert into tarjeta values (5,'5579099002354589',03,19);

	insert into telcliente values (1,'9511236778');
	insert into telcliente values (2,'9512345678');
	insert into telcliente values (3,'9515432345');
	insert into telcliente values (4,'9516547890');
	insert into telcliente values (5,'9511112345');