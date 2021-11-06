let produto = {
    nome: "lápis",
    qtd: 13,
    // Isto é um método: métodos são funções atreladas a propriedades de objetos
    vender(n){
        if(n > this.qtd){
            return "Não há estoque disponível para essa quantidade"
        }
        this.qtd -= n
    }
}
produto.vender(113)
console.log(produto)
