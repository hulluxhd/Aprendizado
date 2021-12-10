const tempoDeCarga = 1000

function animarBarra(){
    let elem = document.querySelector("#barra")
    let width = 0;
    let progressoSobreTempoTotal = tempoDeCarga/100

    let id = setInterval(incrementarProgresso, progressoSobreTempoTotal)

    function incrementarProgresso(){
        if(width >= 100){
            clearInterval(id)
        } else{
            width++
            elem.style.width = width + "%"
            elem.innerText = width + "%"
        }
    }
}

document.querySelector("#iniciar-carga").addEventListener('click', animarBarra)