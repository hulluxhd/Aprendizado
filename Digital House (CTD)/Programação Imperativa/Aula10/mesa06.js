let filmes = ["Star Wars","mr. robot","o preço do amanhã", "a vida é bela"];
let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function maiusculo(array){
    array = ([array[0].toUpperCase(), array[1].toUpperCase(), array[2].toUpperCase(), array[3].toUpperCase()])
    return console.log(array)
}
function integrar(array1, array2){
    array1 = [filmes+filmes.push(array2[0], array2[1], array2[2], array2[3], array2[4])];
    console.log(array1)
}

function deletar(vetor){
    let deletado= vetor.pop();
    console.log(vetor)
}

maiusculo(filmes);
integrar(filmes, filmes2);
deletar(filmes)