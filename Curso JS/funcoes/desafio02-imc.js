function imc(p , a , cb){
    if(p == undefined || a == undefined){
        throw Error("Somente números")
    }
    let imc = p/a**2;
    console.log("Seu índice de massa corpórea é: " + imc)
    cb(imc)
}

function imc_class(cb){
    if(cb >= 16 && cb < 17){
        var classe = "muito abaixo do peso"
    } else if(cb >= 17 && cb < 18.5){
        var classe = "abaixo do peso"
    } else if(cb >= 18.5 && cb < 25){
        var classe = "normal"
    } else if(cb >= 25 && cb < 30){
        var classe = "acima do peso"
    } else if(cb >= 30 && cb < 35){
        var classe = "obesidade I"
    } else if(cb >= 35 && cb < 40){
        var classe = "obesidade II"
    } else {
        var classe = "rapaz, vai se tratar. Tá quase morrendo aí"
    }
    console.log(`A sua classificação é: ${classe}.`)
}

imc(70, 1.72, imc_class)