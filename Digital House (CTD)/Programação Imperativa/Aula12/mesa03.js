function somaArray(vetor){
    let soma = 0;
    for(let i=0;i<=vetor.length-1;i++){
        soma = soma+vetor[i]
    }
    console.log(soma)
}
somaArray([-5,100])