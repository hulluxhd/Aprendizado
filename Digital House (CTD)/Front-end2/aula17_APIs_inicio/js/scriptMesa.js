let getMain = document.querySelector('main')
let btn = document.querySelector('button')
btn.addEventListener('click', event =>{
    event.preventDefault()
    let url = `https://reqres.in/api/users?page=2`
    //console.log(response.data[0].id))
    fetch(url).then(response => response.json()).then(response => {for(n in response.data){
        getMain.innerHTML += `<div>${response.data[n].first_name}</div>`
    }})})