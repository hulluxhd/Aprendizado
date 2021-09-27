use sakila;

-- relatórios parte 1

-- Obtenha o nome e o sobrenome dos primeiros 5 atores disponíveis, use Alias para exibir os nomes das colunas com
--  a primeira letra maiúscula.

select nome as Nome, sobrenome as Sobrenome from ator limit 5;

-- Obtenha uma lista que inclua nome, sobrenome e e-mail dos clientes inativos. Use Alias para exibir os nomes
-- das colunas com a primeira letra maiúscula.

select nome as Nome, sobrenome as Sobrenome, email as Email, ativo from cliente where ativo = 0;

-- Obtenha uma lista de filmes, incluindo título, ano e descrição dos filmes que têm uma duracao_locacao
-- maior que cinco. Classificar por duracao_locacao descendente e use Alias para exibir os nomes das colunas com 
-- a primeira letra maiúscula.

select titulo as Titulo, ano_lancamento as "Ano de Lançamento", descricao as Descrição, duracao_locacao from filme
where duracao_locacao > 5 order by duracao_locacao desc;

-- Obtenha uma lista de aluguéis que foram feitos durante o mês de Maio de 2005. 
-- Inclua todas as colunas disponíveis no resultado.

select * from locacao where data_locacao between '2005-05-01' and '2005-05-30' order by data_locacao asc;

-- RELATÓRIOS PARTE 2

-- Obtenha o valor TOTAL de locações, use um Alias para mostrá-lo em uma coluna chamada "Quantidade";

select count(locacao_id) as Quantidade from locacao;

-- Obtenha a soma TOTAL de todos os pagamentos, use um Alias para mostrá-lo em uma coluna chamada "TOTAL", 
-- uma coluna com a quantidade de locações com o alias "Quantidade" e uma coluna indicando o "Valor Médio ”por locação;

select count(*) as Quantidade, sum(valor) as TOTAL, avg(valor) as "Valor Médio" from pagamento;

-- Gere um relatório que responda à pergunta: quais são os dez clientes que mais dinheiro gastam e quantas
--  locações fizeram?

select cliente.nome, sum(pagamento.valor) as "Valor total", cliente.cliente_id from cliente
inner join pagamento on cliente.cliente_id = pagamento.cliente_id
inner join locacao on cliente.cliente_id = locacao.cliente_id
GROUP BY cliente.nome 
order by cliente.nome desc;


-- Gere um relatório que mostre: identificação do cliente, quantidade  de locações e valor total de todos 
-- os clientes que gastaram mais de $ 150 em locações.

-- Gere um relatório que mostre por mês o valor das locações e a quantidade de locações para o ano de 2005.
-- Dica: As tabelas que vocês deverão utiizar são pagamento e locacao.
-- Dica: As tabelas a serem utilizadas são aluguel e pagamento.

