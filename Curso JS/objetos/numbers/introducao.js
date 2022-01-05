let num = 12344566.7890


// toFixed() -> recebe um number como parametro e retorna a quantidade de casas decimais passadas (transforma o resultado em string)

console.log(num.toFixed(50))
console.log(typeof num.toFixed(2))

// toPrecision() -> recebe um number como parametro e retorna um valor preciso que se encaixe no parametro (transforma o resultado em string)
console.log(num.toPrecision(8))
console.log(typeof num.toPrecision(2))

// toExponential() -> retorna o numero em notação cientifica. Um parametro pode ser passado para indicar a quantidade de casas decimais



