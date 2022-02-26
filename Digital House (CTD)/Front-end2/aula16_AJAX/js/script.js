let repo = document.getElementById("repo")
let btn = document.querySelector('button')
let ol = document.querySelector('ol')
let arrayRepo = []
let repoStorage = localStorage.getItem('repos')

if(repoStorage != null){
    for(objeto in repoStorage){
        ol.innerHTML += `<li>${objeto.name}</li>`
    }
} else
    console.log('vazio')


btn.addEventListener('click', event =>{
    event.preventDefault()

    let url = `https://api.github.com/users/${repo.value}/repos`
    // fetch gera um get para a url indicada (está pegando a url)
    fetch(url).then(response => response.json()).then((arrayRepos) => {
    arrayRepos.forEach(element => {
        ol.innerHTML += `<li>${element.name}</li>`
        arrayRepo.push(element)
    })})
    console.log(arrayRepo)
    var repoStorages = localStorage.setItem('repos', arrayRepo)
    console.log(repoStorages)
})
