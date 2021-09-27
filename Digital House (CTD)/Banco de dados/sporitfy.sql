CREATE DATABASE spotify;
use spotify;

CREATE TABLE usuario(
id int not null primary key AUTO_INCREMENT,
nomeUsuario varchar(100),
data_nac DATE,
sexo varchar(100),
email varchar(100),
senha varchar(100)
);
CREATE TABLE playlist (
id int not null primary key AUTO_INCREMENT,
titulo varchar(100),
qtdCancoes int,
dataCriacao date,
idUsuario int,
foreign key(idUsuario) references usuario(id)
);
CREATE TABLE playlist_cancao (
id int not null primary key AUTO_INCREMENT,
idCancao INT,
idPlaylist int,
foreign key(idCancao) references cancoes(id),
foreign key(idPlaylist) references playlist(id)
);
CREATE TABLE artista (
id int not null primary key AUTO_INCREMENT,
nome varchar(100),
sobrenome varchar(100)
);
CREATE TABLE album (
id int not null primary key AUTO_INCREMENT,
titulo varchar(100),
idArtista INT,
foreign key(idArtista) references artista(id)
);
CREATE TABLE cancoes (
id int not null primary key AUTO_INCREMENT,
titulo varchar(100),
duracao double,
qtdReproducao int,
qtdLikes int,
idAlbum int,
foreign key(idAlbum) references album(id)
);
CREATE TABLE genero (
id int not null primary key AUTO_INCREMENT,
genero varchar(100)
);
CREATE TABLE genero_cancao (
id int not null primary key AUTO_INCREMENT,
idCancao int,
idGenero int,
foreign key(idCancao) references cancoes(id),
foreign key(idGenero) references genero(id)
);

