(function(){
    const nomeUsuario = prompt("Qual seu nome? ")
    
    if(nomeUsuario){
        const topBar = document.createElement("div")
        topBar.className = "top-bar"
        topBar.innerHTML = `<p> Seja bem vindo, <strong> ${nomeUsuario} </strong> </p>`

        const pai = document.querySelector(".hero")
        pai.insertBefore(topBar, pai.firstElementChild)
    }

})()