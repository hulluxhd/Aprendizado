// Modelando OO com a sintaxe do ecmascript 6

class Animal{
    constructor(tipo, idade = 0){
        
        this.tipo = tipo || 'desconhecido'
        this.idade = idade 
    }
    obterTipo(){
        return this.tipo
    }
    
}
Animal.prototype.lalala = 'lalala'
let dog = new Animal('Graham', 'mamífero')
console.log(dog.obterTipo())
console.log(dog)

let gato = new Animal('tete')
console.log(gato.obterTipo())
console.log(gato)
console.log(gato.lalala)

class Peixe extends Animal{
    constructor(nome, nadador = true, idade){
        super('peixe', idade)
        this.nome = nome
        this.nada = nadador
        
    }
}

let peixe1 = new Peixe('abelhudo', false, 2)
console.log(peixe1)
console.log(peixe1.__proto__)

