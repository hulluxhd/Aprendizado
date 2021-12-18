let n1 = [1,20,30]
let n2 = {
    nome: "denny",
    idade: 28
}

for(let prop in n2){
    console.log(prop)
    console.log(n2[prop])
}

for(n of n1){
    console.log(n)
}