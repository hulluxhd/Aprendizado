CREATE DATABASE consultorio;
USE consultorio;
CREATE TABLE pacientes(
	id int not null primary key AUTO_INCREMENT,
    nome varchar(50) not null,
    sobrenome varchar(100)
);

CREATE TABLE especialidades(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);


CREATE TABLE medicos(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    sobrenome VARCHAR(100),
    especialidade_id INT,
    FOREIGN KEY(especialidade_id) REFERENCES especialidades(id)
);