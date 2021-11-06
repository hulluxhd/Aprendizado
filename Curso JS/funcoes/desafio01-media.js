function media() {
    if(arguments.length == 0){
        return console.log(0);
    }

    for(let j = 0; j < arguments.length; j++){
        if(typeof arguments[j] != typeof "number"){
            throw Error("Há um parâmetro que não é um número")
        }
    }

    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }

    
    return console.log("A média é "+soma/arguments.length)
}

media(1, "2")