(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")

    if(nomeUsuario){
        elemento.innerHTML += "<strong>" + nomeUsuario + "</strong>"
    } else{
        const elementoPai = elemento.parentElement
        elemento.parentElement.remove()
    }
})()