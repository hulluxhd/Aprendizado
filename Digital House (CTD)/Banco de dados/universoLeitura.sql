CREATE DATABASE UniversoLeitura;
use UniversoLeitura;
CREATE TABLE associados(
	id int not null primary key AUTO_INCREMENT,
    nome varchar(50) not null,
    sobrenome varchar(50) not NULL,
    endereco varchar(50),
    cidade varchar(50),
    estado varchar(50)
);
CREATE TABLE telefones(
	id int not null primary key AUTO_INCREMENT,
	telefone_associado varchar(50),
    cod_associado INT,
    FOREIGN KEY(cod_associado) references associados(id)
);

CREATE TABLE editoras(
	id int not null primary key AUTO_INCREMENT, 
	razao_social varchar(150),
    telefone varchar(100)
);

CREATE TABLE autores(
	id int not null primary key AUTO_INCREMENT,
	nome varchar(100),
    sobrenome varchar(100)
);

CREATE TABLE livros(
	id int not null primary key AUTO_INCREMENT,
	cod_ISBN varchar(13),
    titulo varchar(200),
    ano_criacao date,
    ano_publicacao date,
    cod_autor int,
    cod_editora int,
    FOREIGN KEY(cod_autor) references autores(id),
    FOREIGN KEY(cod_editora) references editoras(id)
);

CREATE TABLE emprestimos(
	id int not null primary key AUTO_INCREMENT,
    data DATE,
    prazo_devolucao date,
    data_devolucao date,
    cod_associado int,
    FOREIGN KEY(cod_associado) references associados(id)
);

CREATE TABLE exemplares(
	id int not null primary key AUTO_INCREMENT,
    sinistro bool,
    cod_livro INT,
    FOREIGN KEY(cod_livro) references livros(id)
);

CREATE TABLE emprestimo_exemplares(
	id int not null primary key AUTO_INCREMENT,
	cod_emprestimo INT,
    cod_exemplar int,
    FOREIGN KEY(cod_emprestimo) references emprestimos(id),
    FOREIGN KEY(cod_exemplar) references exemplares(id)
);

INSERT into associados values (default, 'Denny', 'Ribeiro', 'Avenida Padre Jose Holanda do Vale', 'Maracanau', 'CE');
INSERT into associados values (default, 'Joyce', 'Leylane', 'Avenida Presidente Costa e Silva', 'Fortaleza', 'CE');
INSERT into associados values (default, 'Thulio', 'Geraldo', 'Avenida Padre Jose Holanda do Vale', 'Maracanau', 'CE');
INSERT into associados values (default, 'Angelina', 'Alves', 'Avenida Padre Jose Holanda do Vale', 'Maracanau', 'CE');

INSERT INTO telefones values(default, 85981385830, 1);
INSERT INTO telefones values(default, 85996028328, 2);

insert into livros(id, cod_ISBN, titulo) values(default, 1111111111111, 'Deserto dos Tártaros');
insert into exemplares values(default, 3, 1);

delete from livros where id = 1;
update associados set endereco='Rua Morada das Flores 860' where id = 3;