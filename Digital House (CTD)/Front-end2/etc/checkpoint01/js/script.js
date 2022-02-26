let botaoEnviar = document.querySelector("button")


botaoEnviar.onclick = function(){
    let descricao = document.getElementById("descricao").value; 
    let titulo = document.querySelector("#titulo").value
    let url = document.querySelector("#url").value
    let addDiv = document.createElement("div")
    addDiv.setAttribute("class", "card")
    let addDescricao = document.createElement("p")
    let addTitulo = document.createElement("p")
    let addImg = document.createElement("img")
    let secao = document.querySelector("section")
    let descricaoTexto = document.createTextNode(descricao)
    let tituloTexto = document.createTextNode(titulo)
    addTitulo.appendChild(tituloTexto)
    addDescricao.appendChild(descricaoTexto)
    addImg.setAttribute("src", url)
    addDiv.appendChild(addImg)
    addDiv.appendChild(addTitulo)
    addDiv.appendChild(addDescricao)
    secao.appendChild(addDiv)

}
