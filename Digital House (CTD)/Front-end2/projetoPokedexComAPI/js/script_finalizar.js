let nome = document.querySelector('#nome')
let btn = document.querySelector('button')
let card = document.querySelector('.card')

btn.addEventListener('click', event =>{
    event.preventDefault()


    fetch(`https://pokeapi.co/api/v2/pokemon/${nome.value}`).then(response => response.json()).then(arrayInfo => {
        let source = arrayInfo.sprites.front_default

        



        card.innerHTML += `<img src="${source}
        ">`
        card.innerHTML +=`${nome.value}`
    })

})