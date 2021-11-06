window.onload = function(){
    alert("Página carregada!")
}

let formulario = document.createElement("form")
let input_nome = document.createElement("input")
let input_sobrenome = document.createElement("input")
let botaoEnviar = document.createElement("button")
let botaoResetar = document.createElement("button")
let msgEnviar = document.createTextNode("Enviar")
let msgResetar = document.createTextNode("Resetar")

input_nome.setAttribute("type", "name")
input_nome.setAttribute("placeholder", "Digite seu nome aqui...")
input_sobrenome.setAttribute("type", "name")
input_sobrenome.setAttribute("placeholder", "Digite seu sobrenome aqui...")
botaoEnviar.setAttribute("type", "submit")
botaoEnviar.setAttribute("target", "_blank")
botaoResetar.setAttribute("type", "reset")
botaoResetar.setAttribute("id", "resetar")

document.body.appendChild(formulario)
formulario.appendChild(botaoEnviar)
formulario.appendChild(botaoResetar)
formulario.appendChild(input_nome)
formulario.appendChild(input_sobrenome)
botaoEnviar.appendChild(msgEnviar)
botaoResetar.appendChild(msgResetar)

function stopAction(evt){
    evt.preventDefault()
}
document.querySelector("#resetar").addEventListener("click", stopAction)
document.querySelector("button").addEventListener("click", stopAction)

botaoResetar.onmouseout = function(){
    botaoResetar.style.backgroundColor = "red"
}

botaoResetar.onmouseover = function(){
    botaoResetar.style.backgroundColor = "blue"
    botaoResetar.style.color = "#FFF"
}
let contador = 0
input_nome.onkeypress = function(){
    contador ++
    // texto inserido
    let p = prompt("Digite alguma coisa aí")
    let p1 = document.createElement("p")
    let p2 = document.createTextNode(p)
    p1.appendChild(p2)
    document.body.appendChild(p1)
    // contador como paragrafo
    let pc = document.createElement("p")
    let pc2 = document.createTextNode(contador)
    pc.appendChild(pc2)
    document.body.appendChild(pc)
}