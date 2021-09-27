use filmes_db;
SELECT 
    titulo AS Titulos
FROM
    filmes;
SELECT 
    titulo
FROM
    filmes
WHERE
    avaliacao > 3 AND premios > 1
        AND data_lancamento BETWEEN '1988-01-01' AND '2009-12-31';
SELECT 
    titulo
FROM
    filmes
WHERE
    avaliacao > 3 AND premios > 1
        AND data_lancamento BETWEEN '1988-01-01' AND '2009-12-31'
LIMIT 3 OFFSET 10;
SELECT 
    titulo, avaliacao
FROM
    episodios
ORDER BY avaliacao ASC
LIMIT 3;
SELECT 
    id AS Identificacao,
    nome AS Nome,
    sobrenome AS Sobrenome,
    avaliacao AS Classificacao
FROM
    atores
ORDER BY avaliacao ASC;