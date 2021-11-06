let b = document.querySelector('button');
let body = document.querySelector('body')
let liArray = document.querySelectorAll('li')
function mudarLi(){
    
}

function mudarCor(){
    body.classList.toggle('dark')
    for(let i of liArray){
        i.classList.toggle('blue')
    }
}

b.onclick = mudarCor;



/* let body = document.querySelector('body'); let button = document.querySelector ('button'); let texto = document.querySelectorAll('li'); function alterarTema(){ body.classList.toggle('dark'); for (let item of texto){ item.classList.toggle('dark'); } } button.onclick = alterarTema;  */