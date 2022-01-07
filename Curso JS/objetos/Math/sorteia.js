function getRandomNumber(inicio = 10, fim = 20, inteiro){ // função que retorna números aleatórios de [inicio] a [fim] e se são inteiros ou não
    let numeroGerado = -1
    while(numeroGerado < inicio){
        numeroGerado = Math.random() * fim 
    }

 
    return inteiro ? Math.round(numeroGerado) : numeroGerado.toFixed(2)}

