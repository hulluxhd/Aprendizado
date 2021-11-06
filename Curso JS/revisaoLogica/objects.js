const pessoa = {
    nome: "Denny",
    idade: 25,
    email: "denny@outlook"
}

for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa.prop)
}