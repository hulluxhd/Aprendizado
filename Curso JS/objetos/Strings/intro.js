// replace()
// substitui uma string por outra string (apenas a primeira ocorrência)
const teste = 'testando'
const testeModificado = teste.replace('test', 'p')
console.log(testeModificado)

// replaceAll()
//substitui todas as ocorrências de uma string por outra // não funciona em todos os navegadores
const testeComReplaceAll = teste.replaceAll('t', 'b')
console.log(testeComReplaceAll)

// indexOf()
// retorna a posição de uma string passada como parâmetro dentro de uma outra string, mas só a primeira ocorrência
console.log(teste.indexOf('o'))
console.log(teste.indexOf('a'))
console.log(teste.lastIndexOf('n'))
console.log(teste.lastIndexOf('tetete'), teste.indexOf('lalala')) // se não há a string procurada, retorna -1

// includes()
// retorna um booleano que informa se uma string contém outra string passada como parâmetro // pode ser simulado com indexOf()
console.log(teste.includes('ndo'))
console.log(teste.indexOf('ndo') >= 0)

// slice() e substring()
// 'cortam' a string e retornam novas strings
const world = 'hello world'
console.log(world.slice(world.lastIndexOf('hello'), 10))
console.log(world.substring(world.indexOf('o'), 8))

// toUpperCase() | toLowerCase()
// retornam a string toda em minúscula ou maiúscula
console.log(world.toLowerCase())
console.log(world.toUpperCase())

// valueOf()
// retorna o valor primitivo de um objeto do tipo string
let stringObj = new String('objetificada')
console.log(stringObj)
console.log(stringObj.valueOf())
console.log(stringObj.toString())

// trim() | trimEnd() | trimStart()
// remove os espaços em branco no ínicio e no fim de uma string
// trimEnd() remove os espaços em branco no final 
// trimStart() remove no começo

// padStart() | padEnd()
// cria uma string com a length desejada - passada por parâmetro - e preenche os espaços (start|end) para chegar à condição
const telefone1= '1234-1234'
const telefone = '90000-0000'
function esconde(numero) {
    const numInicio = numero.slice(0, numero.indexOf('-'))
    const numFinal = numero.slice(numero.indexOf('-') + 1)
    const doisUltimos = numFinal.slice(-2)
    return `${numInicio[0].padEnd(numInicio.length, '*')}-${doisUltimos.padStart(numFinal.length, '*')}`
}

console.log(esconde(telefone))
console.log(esconde(telefone1))

// startsWith() | endsWith()
// testa se uma string começa ou termina com um caractere ou expressão

let str2 = 'hoje é sábadoo'
console.log(str2.startsWith('hoje'))
console.log(str2.endsWith('o'))

// charAt() | charCodeAt()
// retorna o caractere de uma posição passada como parâmetro | charCodeAt() retorna o código de um caractere, passado como parâmetro, em unicode

const str3 = 'abcdefh'
console.log(str3.charAt(3))
console.log(str3.charCodeAt(3))