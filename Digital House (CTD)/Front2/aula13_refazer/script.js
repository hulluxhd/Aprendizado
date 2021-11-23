
// regras

// deve conter ao menos duas palavras

let nome = document.querySelector("#nome").value.trim()

let formNome = document.querySelector("#nome")

formNome.addEventListener('mouseout', () => {
    if (nome.length > nome.replace(/ /g, '').length) {
        nome = nome.replace(/ /g, '')
        console.log(nome)
    } else if (nome.length <= nome.replace(/ /g, '').length) {

        while (nome.length <= nome.replace(/ /g, '').length) {
            alert("Digite pelo menos duas palavras")
            nome = prompt("Nome: ")
            document.querySelector("#nome").value = nome
        }
    } else if(nome.length > 150){
        alert("Nome não pode conter mais de 150 caracteres")
        nome = prompt("Nome: ")
        document.querySelector("#nome").value = nome
    } else if(nome.length === 0){
        alert("Nome deve possuir caracteres")
        nome = prompt("Nome: ")
        document.querySelector("#nome").value = nome
    } else if(typeof nome == "number"){
        alert("Nome não pode conter números")
        nome = prompt("Nome: ")
        document.querySelector("#nome").value = nome
    }

})

// deve ter mais de uma letra

