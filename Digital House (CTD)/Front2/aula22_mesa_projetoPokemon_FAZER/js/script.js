let nomePokemongo = document.getElementById('nome')
let btn = document.getElementById('btn')
let section = document.querySelector("section")
let idPokemon = 0;
var btnLutar = document.querySelector(".btn-lutar")

let arrayPokemon = {
    pokemon: []
}


var botaoDeLuta = document.createElement('div')
botaoDeLuta.setAttribute('class', 'lutando')
var btnLutar = document.createElement('button')
btnLutar.setAttribute('class', 'btn-lutar')
btnLutar.innerText = 'Lutar!'

// Quando clicado, este botão fará o fetch da api e criará um objeto, que será então guardado no array
btn.addEventListener('click', (event) => {

    event.preventDefault()
    let url = `https://pokeapi.co/api/v2/pokemon/${nomePokemongo.value.toLowerCase()}`

    fetch(url).then(response => response.json()).then(response => {
        const novoPokemon = {
            sprite: response.sprites.front_default,
            nome: response.forms[0].name,
            hp: response.stats[0].base_stat,
            strengh: response.stats[1].base_stat,
            defense: response.stats[2].base_stat
        }
        arrayPokemon.pokemon.push(novoPokemon)
        section.innerHTML = ""
        renderizar()



    }
    )
    nomePokemongo.value = ""

}
)

// esta função renderiza os elementos na tela, utilizando o .map() para acessar todos os elementos do array
function renderizar() {
    if (arrayPokemon.pokemon.length === 0) return
    else {
        arrayPokemon.pokemon.map(elemento => {
            section.innerHTML += `
         <div class="card-img">
            <img src="${elemento.sprite}">
            <div class="insideStatus">
                <h3>Nome: ${elemento.nome}</h3>
            </div>
         </div>`;

            section.innerHTML += `
         <div class="card-status">
            <div class="level">
                <h4>LV: </h4>
            </div>
            <h5>HP: ${elemento.hp}</h5>
            <h5>ATK: ${elemento.strengh}</h5>
            <h5>DEF: ${elemento.defense}</h5>
        </div>`

            section.innerHTML += `
        <div class="card-progress-bars">
            <div class="xp-progress">
                <div class="progressao"></div>
            </div>
            
            <div class="max-level">
                <div class="maximizando"></div>
            </div>
        </div>
            ` 
            section.appendChild(botaoDeLuta)            
            botaoDeLuta.appendChild(btnLutar)
        })
    }

}


// quando invocada, aumenta a barra de xp

function barraDeXP() {
    let barraXP = document.querySelector(".progressao")
    let width = 0
    let id = setInterval(aumentarBarraDeXP, 200)
    function aumentarBarraDeXP() {
        if (width >= 100) {
            let barraMax = document.queryselector('.maximizando')
            width += 10
            barraMax.style.width = width + "%"
            clearInterval(id)
        }
        else {
            width += 10
            barraXP.style.width = width + "%"

        }
    }
    barraXP.style.width = "0%"


}



btnLutar.addEventListener('click', barraDeXP)




