/* function Animal(tipo, patas){
    this.tipo = tipo
    this.patas = patas
}
Animal.prototype.obterTipo = function(){
    return this.tipo
}
let dog = new Animal('mamifero')

console.log(Animal)
console.log(dog)
console.log(Animal.prototype)
console.log({nome: 'dennt', idade:25})
 */

/* function Animal(tipo) { // modela um Construtor
    if (tipo) this.tipo = tipo // se o tipo for passado como parâmetro, retorna o tipo
}

Animal.prototype.obterTipo = function () { // cria a função obter tipo e retorna seu valor, DENTRO DO PROTOTYPE e não dentro do construtor
    return this.tipo
}

let sapo = { tipo: "anfibio" } // cria um objeto apenas com o tipo
console.log(Animal.prototype.obterTipo.call(sapo)) // chama a função que está dentro de ANIMAL.prototype e a executa com o call, passando o objeto sapo, que tem a propriedade tipo, como parâmetro. Isso quer dizer que mesmo uma função não tenha sido projetada para ser executada fora do seu contexto, pode.
console.log(sapo)

function SalaAula(alunos) {
    this.alunos = alunos || []
}

SalaAula.prototype.adicionarAluno = function (aluno) {
    this.alunos.push(aluno)
}
SalaAula.prototype.mostrarAlunos = function() {
    return this.alunos.forEach(element => {
        console.log(element)
    })
}


let sala1 = new SalaAula(['fulano', 'cicrano'])
sala1.mostrarAlunos()
sala1.adicionarAluno(...['testão', 'luna', 'lana'])
sala1.mostrarAlunos()

console.log(sala1 instanceof SalaAula) */

function soma(a,b){
    console.log(a+b)
    return a+b
}

function subtrair(a,b){
    return a-b
}

let calculador = {
    teste: 33,
    subtrair,
    soma,
}

if(calculador.soma){
    calculador.soma(2,3)
}

for(prop in calculador){
    console.log(calculador[prop])
    console.log(prop)
}
console.log(calculador[soma])
