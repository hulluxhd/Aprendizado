var filmes = ["Star Wars","mr. robot","o preço do amanhã", "a vida é bela"];
var filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function adicionarElementos(array1, array2){
    for(let i = 0; i <= array2.length-1; i++){
      array1.push(array2[i]);
        
    }
    console.log(array1);
}

adicionarElementos(filmes, filmes2)