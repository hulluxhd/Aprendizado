let filmes = ["Star Wars","mr. robot","o preço do amanhã", "a vida é bela"];
let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function converterMaiusc(array){
    for(let i = 0; i <= array.length-1; i++){
        array[i]=array[i].toUpperCase();
    }
    console.log(array)
}
converterMaiusc(filmes)