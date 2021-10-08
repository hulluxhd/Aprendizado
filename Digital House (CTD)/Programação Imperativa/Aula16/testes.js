/* let somar = (a,b) => a+b;
console.log(somar(2,3));

let bemvindo= (message) => console.log(message);
bemvindo('Testando porra');

let soma = (n1, n2) => (n1 + n2);
console.log(soma(2,10)); */



/* nomeCompleto = (nome, sobrenome) => {
    return nome + ' ' + sobrenome
};

iniciais = (nome, sobrenome) => {
    return nome[0].toUpperCase() + sobrenome[0].toUpperCase() + "!";
};

bomDia = (nome, sobrenome, teste) => {
    return 'Olá, ' + teste(nome, sobrenome);
}

console.log(bomDia('denny', 'ribeiro', iniciais)) */

/* function nomeCompleto(nome,sobrenome){
    return nome + " " + sobrenome;
}

function bomDia(nome, sobrenome, callback){
    return "olá, " + callback(nome, sobrenome);
};

console.log(bomDia('denny', 'ribeiro', nomeCompleto)) */

andar = () => {
    console.log('O carro está andando')
};

parar = () => console.log('O carro está parado');

acaoCarro = (acao) => {
    return acao()
};

/* acaoCarro(parar) */

let fizzBuzz = (a,nomeA = "Fizz", b, nomeB="Buzz") => {
    for (let i = 1; i <= 100; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log(nomeA + nomeB)
        } else if (i % a == 0) {
            console.log(nomeA)
        } else if (i % b == 0) {
            console.log(nomeB)
        } else
            console.log(i)
    }
};

//fizzBuzz(12, 'd' , 10, 'r')


let numeros = [2, 4, 6];

let dobro = numeros.map(function(num){
    return num*2
});

console.log(dobro)

let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter(function(idade){
    return idade > 18;
})

console.log(maiores)

let numero = [5,7,16];
let soma = numero.reduce(function(acumulador, numero){
    return acumulador + numero;
});

console.log(soma)

let paises = ["brazil", "frança vagaba"];

paises.forEach(function(pais){
    console.log(pais);
})

let n = [2, 4, 6, 8, 10];

let n_m = n.map(function(num_m){
    return num_m + 1
})

console.log(n_m);

let nomes = ["denny ribeiro", "maria", "jopyce leylane", "maria"]
let nomesF = nomes.filter(function(nome){
    if (nome == "maria"){
        return nome
    }
})
console.log(nomesF)

let num = [1,5,9,3,7];
let numF = num.reduce(function(anterior,atual){
    return anterior + " - " + atual
})

console.log(numF)

let animais = ["cachorro", "gato", "formigas"]
animais.forEach(function(element){
    console.log("O nome do animal é " + element);
})

