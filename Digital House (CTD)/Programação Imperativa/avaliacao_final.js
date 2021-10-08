let produtos = [
{ nome: 'Monitor', valor: 1000, qualidade: 100, status: true, }, 
{ nome: 'Cadeira', valor: 1600, qualidade: 100, status: true, }, 
{ nome: 'Computador', valor: 1200, qualidade: 100, status: true, } ]; 

let carrinho = produtos.filter(function(produto){
    return produto.valor >= 482 && produto.valor <= 1600 &&
    produto.qualidade > 60 && produto.status == true;
})

/* const valorTotal = carrinho.reduce(function(anterior, atual){
     anterior + atual.valor
}) */

const valorTotal = carrinho.reduce((acc, curr) => acc + curr.valor, 0);

carrinho.forEach(function(elemento){
    console.log("O item é: " + elemento.nome + "\n" + "O valor é: " + elemento.valor + "\n");
    
})

console.log(valorTotal)