document.body.appendChild(document.createElement("h1"))
let titulo = document.querySelector("h1")
titulo.appendChild(document.createTextNode("Formulário feito em JS"))


let formulario = document.createElement("form")
document.body.appendChild(formulario)


let form = document.createElement("input")
form.setAttribute("type", "name")
form.setAttribute("placeholder", "Digite seu nome...")
formulario.appendChild(form)

let email = document.createElement("input")
email.setAttribute("type", "name")
email.setAttribute("placeholder", "Digite seu email...")
email.setAttribute("status", "disabled")
formulario.appendChild(email)

let password = document.createElement("input")
password.setAttribute("type", "password")
password.setAttribute("placeholder", "Digite sua senha...")
formulario.appendChild(password)

let enviar = document.createElement("button")
let msgEnviar = document.createTextNode("Enviar")
enviar.appendChild(msgEnviar)
enviar.setAttribute("type", "submit")
enviar.setAttribute("target", "_blank")
document.body.appendChild(enviar)

let resetar = document.createElement("button")
let msgResetar = document.createTextNode("Resetar")
resetar.appendChild(msgResetar)
resetar.setAttribute("type", "reset")
resetar.setAttribute("target", "_blank")
document.body.appendChild(resetar)


formulario.style.display = "flex"
formulario.style.flexDirection = "column"
document.body.style.width = "35%"

email.removeAttribute("placeholder")