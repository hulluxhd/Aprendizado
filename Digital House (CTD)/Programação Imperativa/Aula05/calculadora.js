//adição
function adicao(a,b){
    return(console.log(a+b))
}
//subtracao
function subtracao(a,b){
    console.log(a-b)
}
//multiplicacao
function multiplicacao(a,b){
    console.log(a*b)
}
//divisao
function divisao(a,b){
    console.log(a/b)
}
function exp(c){
    multiplicacao(c,c)
}
function MediaTresNumeros(a,b,c){
    let d = adicao(a,b)
    return console.log((d+c)/3)
}
console.log("**************Teste de operações**************")
adicao(2,4)
subtracao(4,2)
multiplicacao(2,3)
divisao(10,5)
console.log("Divisão por 0")
divisao(10,0)
console.log("**********************************************")
exp(2)
MediaTresNumeros(1,1,1)
