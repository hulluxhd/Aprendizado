let pA = [5,8,4,9,5];
let pB = [8,7,8,6,8];
let pC = [7,5,10,8,3];
let soma = 0;

function pontuacaoMaior(usuario){
    let maior = 0
    for(let j = 0; j <= 4; j++){
        if(usuario[j]>maior){
            maior = usuario[j];
        }  
    }
    console.log(maior)
}
function pMedia(a){
    for(let j = 0; j <= 4; j++){
        soma = soma+a[j]
    }
        somaA = soma;
        mediaA = somaA/5;
        soma = 0;
   
        console.log(mediaA)
}
function 


pMedia(pB)
pontuacaoMaior(pC)
