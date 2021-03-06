-- Checkpoint II - Banco de Dados
-- Denny Ribeiro

-- Sabendo das necessidades se coletar informações para poder gerar valor, uma empresa iniciante do ramo industrial 
-- decidiu que criaria um banco de dados para armazenar informações de interesse. 

-- Há 4 tabelas, a saber: clientes, fornecedores, estoques e pedidos. 

-- clientes --(1:N)--> pedidos
-- fornecedores --(1:N)--> estoques
-- estoques --(1:N)--> pedidos
-- onde pedidos é uma tabela intermediária

create DATABASE Checkpoint2_BD;
use Checkpoint2_BD;

create table clientes(
id int not null primary key AUTO_INCREMENT,
nome varchar(100),
sobrenome varchar(100),
rg char(11),
cpf char(8)
);

create table fornecedores(
id int not null primary key AUTO_INCREMENT,
nome varchar(150),
cnpj char(14),
cidade varchar(50),
estado varchar(50),
produto_ofertado varchar(150)
);

create table estoques(
id int not null primary key AUTO_INCREMENT,
id_fornecedor int not null,
produto varchar(150),
descricao_produto text,
qtd_em_estoque smallint,
foreign key(id_fornecedor) references fornecedores(id)
);

create table pedidos(
id int not null primary key AUTO_INCREMENT,
id_estoques int not null,
id_cliente int not null,
qtd_itens smallint,
valor_final decimal(10,2),
foreign key(id_estoques) references estoques(id),
foreign key(id_cliente) references clientes(id)
);

insert into clientes(id, nome, sobrenome, rg, cpf)
values (default, 'Joy', 'Ley', 33333333333, 44444444), (default, 'Thulio', 'Geraldo', 11111111111, 22222222);

update clientes
set nome = 'Roger', sobrenome = 'Smith'
where id = 1;

delete from clientes where id = 2;

select * from clientes;

select nome, cpf from clientes;



