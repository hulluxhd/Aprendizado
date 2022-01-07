let num = 12344566.7890


// toFixed() -> recebe um number como parametro e retorna a quantidade de casas decimais passadas (transforma o resultado em string)

console.log(num.toFixed(50))
console.log(typeof num.toFixed(2))

// toPrecision() -> recebe um number como parametro e retorna um valor preciso que se encaixe no parametro (transforma o resultado em string)
console.log(num.toPrecision(8))
console.log(typeof num.toPrecision(2))

// toExponential() -> retorna o numero em notação cientifica. Um parametro pode ser passado para indicar a quantidade de casas decimais

num = 12
console.log(typeof parseFloat(num.toExponential(1)))
console.log(typeof num.toExponential(1))
console.log(num)
console.log(typeof num)


// toString() -> para cada tipo de dado (array, objeto literal, string, number, float) o método toString() pode ter comportamentos diferentes. No caso dos números, vai transformar um número em String, ou, se passar um parâmetro, o número pode ser convertido para outros sistemas númericos (binário, octodecimal, hexadecimal)

console.log(num.toString())
console.log(num.toString(2))
console.log(num.toString(16))

// toLocaleString() -> faz uma formatação na saída dos dados. Pode receber dois parâmetros 1) a região de hospedagem (pt-BR, en-US, pt-PT por exemplo) e um parametro 2) de moeda.

num = 1200.34
console.log(num.toLocaleString())
console.log(num.toLocaleString('pt-BR'))
console.log(num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

// isNaN() -> retorna um booleano que expressa se uma string pode ser convertida em número. False = pode ser convertido, True = não pode ser convertido

let num2 = '1a2300.00a'
console.log(num2, typeof num2, isNaN(num2), parseFloat(num2), typeof parseFloat(num2))