CREATE DATABASE cardapio;
use cardapio;

CREATE TABLE categorias(
	id int not null PRIMARY key AUTO_INCREMENT,
    nome varchar(20),
    url_imagem varchar(250)
);

create TABLE produtos(
	id int not null PRIMARY key AUTO_INCREMENT,
    nome varchar(100),
    descricao varchar(250),
    imagem varchar(250),
    valor decimal(5,2),
    idCategoria int,
    FOREIGN KEY(idCategoria) references categorias(id)
);

create table clientes(
	id int not null PRIMARY key AUTO_INCREMENT,
    nome varchar(50),
    sobrenome varchar(50),
    cpf char(11),
    celular char(15),
    email varchar(150)
);

CREATE table pedidos(
	id int not null PRIMARY key AUTO_INCREMENT,
    quantidade int,
    preco_total decimal(7,2),
    idProduto int,
    idCliente int,
    FOREIGN KEY(idProduto) references produtos(id),
    FOREIGN KEY(idCliente) references clientes(id)
    
);

create table vendas(
	id int not null PRIMARY key AUTO_INCREMENT,
    data_atual date,
    hora_atual time,
    total decimal(7,2),
    idPedidos int,
    FOREIGN KEY(idPedidos) references pedidos(id)
);