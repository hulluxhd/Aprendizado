use EMarket;
select CategoriaNome, Descricao from Categorias;
select * from Produtos;
select ProdutoNome, Descontinuado from Produtos where Descontinuado = 1;
select ProvedorID, ProdutoNome from Produtos where ProvedorID = 8;
select ProdutoNome, PrecoUnitario from Produtos where PrecoUnitario between 18 and 22;
if UnidadesEstoque <= NivelReabastecimento then
select ProdutoNome, ProvedorID, UnidadesEstoque, NivelReabastecimento from Produtos;

select Contato, Empresa, Titulo, Pais from Clientes where Contato is not null ORDER BY Pais asc;
select Contato, Empresa, Titulo, Pais from Clientes where Titulo = "Owner";

select Contato as Nome from Clientes where Contato like 'C%';

select FaturaId from Faturas order by DataFatura asc;
select FaturaId, PaisEnvio from Faturas where PaisEnvio = 'USA' and FormaEnvio <> 3 order by DataFatura asc;

select ClienteID from Faturas where ClienteID = 'GOURL';
select FaturaId, EmpregadoID from Faturas where EmpregadoID = 5 or EmpregadoID = 3 or EmpregadoID =5 or EmpregadoID =8 or EmpregadoID =9;

select ProdutoNome, PrecoUnitario from Produtos  order by PrecoUnitario desc limit 5;
select ProdutoNome, UnidadesEstoque from Produtos ORDER BY UnidadesEstoque desc limit 10;

select FaturaId, ProdutoID, Quantidade from DetalheFatura where Quantidade between 50 and 100 order by Quantidade desc ; 
select FaturaId as 'Numero da fatura', ProdutoID as Produto, Quantidade, PrecoUnitario, Quantidade*PrecoUnitario as Total from DetalheFatura;


