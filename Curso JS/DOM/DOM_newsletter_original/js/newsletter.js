/* const txtEmail = document.getElementById("txtEmail")


document.getElementById("btn").onclick = () => {
    const email = txtEmail.value
    document.getElementById("newsletterFeedback").innerHTML = `<p> O email ${email} foi cadastrado com sucesso! </p>`
} */

const txtEmail = document.querySelector("#txtEmail")

let editarEmail = () => {
    txtEmail.disabled = false
    txtEmail.focus()
}

txtEmail.onblur = () => {
    txtEmail.disabled = true
}