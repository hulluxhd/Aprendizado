CREATE DATABASE cardapio;
USE cardapio;
CREATE TABLE categorias(
	id INT NOT NULL auto_increment PRIMARY KEY,
    nome VARCHAR(20),
    url_imagem VARCHAR(250)
);
CREATE TABLE produtos(
	id INT NOT NULL auto_increment PRIMARY KEY,
    nome VARCHAR(100),
    descricao VARCHAR(300),
    imagem VARCHAR(250),
    valor DECIMAL(5,2),
    idCategorias INT,
    FOREIGN KEY(idCategorias) references categorias(id)
);

CREATE TABLE clientes(
	id INT NOT NULL auto_increment PRIMARY KEY,
    nome VARCHAR(50),
    sobrenome VARCHAR(100),
    cpf CHAR(11),
    celular CHAR(15),
    email VARCHAR(150)
);

CREATE TABLE pedidos(
	id INT NOT NULL auto_increment PRIMARY KEY,
	quantidade INT,
    preco_total DECIMAL(7,2),
    idProduto INT,
    idCliente INT,
    FOREIGN KEY(idProduto) REFERENCES produtos(id),
    FOREIGN KEY(idCliente) REFERENCES clientes(id)
);