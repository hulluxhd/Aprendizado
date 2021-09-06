function somarArray(vetor){
    if (vetor.length == 3){
        let soma = vetor[0] + vetor[1] + vetor[2];
        console.log(soma);
    } else if(vetor.length == 4){
        let soma = vetor[0] + vetor[1] + vetor[2] + vetor[3];
        console.log(soma)
    } else if(vetor.length==2){
        let soma = vetor[0] + vetor[1];
        console.log(soma);
    }
}

somarArray([1,2,3]);
somarArray([10,3,10,4]);
somarArray([-5,100]);
