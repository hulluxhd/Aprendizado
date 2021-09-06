let vetor1 = [10, 20, 30, "denny", "joyce"];

function inverter(vetor){
    let vetor2 = [vetor1[vetor1.length-1], vetor1[vetor1.length-2], vetor1[vetor1.length-3], vetor1[vetor1.length-4], vetor1[vetor1.length-5]];
    return console.log(vetor2);
}

inverter(vetor1);