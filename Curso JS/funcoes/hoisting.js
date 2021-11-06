/* teste()
function teste(){
    console.log("teste")
}


(function(n1,n2,n3){
    console.log(n1,n2,n3)
})(1,2,3) */

function fn(n1){
    return function fn2(n2){
        return n1 * n2
    }
}

function teste2(){
    console.log("funcao2")
}

let funcao1 = fn(2)
let funcao2 = funcao1(10)
console.log(funcao2)

function teste1(t1){
    console.log(typeof t1)
    t1()
}

teste1(teste2)