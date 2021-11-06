let pessoas = [{
    nome: "Denny",
    idade: 25
}, {
    nome: "Joyce",
    idade: 24

}, {
    nome: "Thulio Viado",
    idade: 19
    
}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`O nome da ${i+1}° pessoa é ${pessoas[i].nome} e sua idade é ${pessoas[i].idade} anos`)
}