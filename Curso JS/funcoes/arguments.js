// ARGUMENTS acessa os argumentos passados numa função, sem ser necessário especificar sua quantidade

// não funciona em arrow functions, apenas em funções declaradas, ou function expression (função guardada dentro de uma variável)

function somar(){
    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma
}

console.log(somar(2,3,4,5,3,2,1))