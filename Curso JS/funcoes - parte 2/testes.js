function teste(str, num) {
    console.log(this.name, str, num)
}

const teste2 = () => {
    console.log(this)
}

const obj = {
    nome: 'teste',
    teste,
    teste2,
}

teste()
teste2()
obj.teste() // o próprio obj
obj.teste2() // retorna o objeto window, pois é uma arrow function


// Call and apply
teste.call(function(){
    {name: 'denny'}
}, ...['ribeiro', 26])

// Closure

// a função lembra do contexto onde ela foi criada
const testeClosure = (function(n){
    
    return function testeInterno(){
        console.log('testando ' + ++n)
        return 'teste finalizado ' + n 
    }
})(10)

console.log(testeClosure)
console.log(testeClosure())
console.log(testeClosure())
console.log(testeClosure())
const fim = testeClosure()
console.log(fim)

console.log('----------------------')

function CriarCachorro(nome){
    let posicao = 0

    return { // vai retornar um objeto
        name: nome,
        latir(){
            console.log(this.name, 'está latindo')
        },
        andar(n){
            posicao += n
            return `${this.name} andou ${n} metros. Sua posicao atual é ${posicao}`
        },
        get posicao(){
            return posicao
        }
    }
}

const cachorro1 = CriarCachorro('Graham')
cachorro1.latir()
console.log(cachorro1.andar(100))
console.log(cachorro1)