let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let btn = document.getElementById('btn')
let cards = document.getElementById('cards')

// requisição POST


btn.addEventListener('click', postando)
btn.addEventListener('click', pegando)

async function postando(evento) {
    evento.preventDefault()
    cards.innerHTML = ""

    // definindo parametros de envio (headers and body)
    let params = {
        method: 'POST',
        body: JSON.stringify({
            nome: nome.value,
            idade: idade.value
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }
    //criando o fetch com a url e os parametros 
    let postFetch = await fetch('https://reqres.in/api/users', params)
    let fetchJson = await postFetch.json()

    cards.innerHTML += `
    <div>
        <h3>Cadastro realizado com sucesso!</h3></h3>
        <h3>Usuário: ${nome.value} </h3>
        <h3>Idade: ${idade.value} </h3>
        <h3>Id: ${fetchJson.id}</h3>
    </div>`



}


// requisição GET
async function pegando(evento){
    evento.preventDefault()
    cards.innerHTML = ""

    let pegarUsuarios = await fetch('https://reqres.in/api/users?page=2')
    let pegarUsuariosJson = await pegarUsuarios.json()

    for(let n = 1; n < 10; n++){
        cards.innerHTML += `
        <div>
            <h3>Nome do get: ${pegarUsuariosJson.data[n].first_name}</h3>
            <h3>Email do get: ${pegarUsuariosJson.data[n].email}</h3>
        </div>`
    
    }
}