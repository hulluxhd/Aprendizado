use extra_joins;
select artista.nome, artista_filmes.filme_id, filmes.titulo from artista
inner join artista_filmes on artista.id = artista_filmes.artista_id
inner join filmes on filmes.id = artista_filmes.filme_id;


select artista.nome, count(artista_filmes.artista_id) from artista
inner join artista_filmes on artista.id = artista_filmes.artista_id
group by artista.nome having COUNT(artista_filmes.artista_id) > 1;

select artista.nome, artista_filmes.filme_id from artista
left join artista_filmes on artista.id = artista_filmes.artista_id;

select filmes.titulo, artista_filmes.artista_id from filmes
left join artista_filmes on filmes.id = artista_filmes.filme_id;

select artista.nome, artista_filmes.filme_id from artista
left join artista_filmes on artista.id = artista_filmes.artista_id
where isnull(artista_filmes.filme_id);

select filmes.titulo, count(artista_filmes.artista_id) from filmes
left join artista_filmes on filmes.id = artista_filmes.filme_id
group by filmes.titulo having count(artista_filmes.artista_id) > 1;
