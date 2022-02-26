const botao = document.querySelector("button");


// evento de maiúsculas
botao.addEventListener('click', () =>{
    let nome = document.getElementById("nome").value;
    nome += " "
    let sobrenome = document.getElementById("sobrenome").value;
    let criarP = document.createElement("p")
    let criarTexto = document.createTextNode(nome.toUpperCase())
    criarP.appendChild(criarTexto)
    criarTexto = document.createTextNode(sobrenome.toUpperCase())
    criarP.appendChild(criarTexto)
    document.body.appendChild(criarP)    
})


// evento de minúsculas
botao.addEventListener('click', () => { 
    let nome = document.getElementById("nome").value;
    nome += " "
    let sobrenome = document.getElementById("sobrenome").value;
    let criarP = document.createElement("p")
    let criarTexto = document.createTextNode(nome.toLowerCase())
    criarP.appendChild(criarTexto)
    criarTexto = document.createTextNode(sobrenome.toLowerCase())
    criarP.appendChild(criarTexto)
    document.body.appendChild(criarP) 

})

// evento de trim

botao.addEventListener('click', () => { 
    let nome = document.getElementById("nome").value;
    nome += " "
    let sobrenome = document.getElementById("sobrenome").value;
    let criarP = document.createElement("p")
    let criarTexto = document.createTextNode(nome.trim())
    criarP.appendChild(criarTexto)
    criarTexto = document.createTextNode(sobrenome.trim())
    criarP.appendChild(criarTexto)
    document.body.appendChild(criarP) 

})

// evento de concat

botao.addEventListener('click', () => { 
    let nome = document.getElementById("nome").value;
    nome += " "
    let sobrenome = document.getElementById("sobrenome").value;
    let criarP = document.createElement("p")
    let criarTexto = document.createTextNode(nome.concat("TESTE"))
    criarP.appendChild(criarTexto)
    document.body.appendChild(criarP) 

})

botao.addEventListener('click', () => { 


    
    let nome = document.getElementById("nome").value;
    nome += " "
    let sobrenome = document.getElementById("sobrenome").value;
    let criarP = document.createElement("p")
    let criarTexto = document.createTextNode(nome.concat(sobrenome.replace("o", "@").replace("e", "3").replace("t", "7")))
    //criarTexto = criarTexto.toString().replace("o", "@").replace("e", "3")
    console.log(criarTexto)
    //criarTexto = criarTexto.replace("a", "@").replace("e", "3")
    criarP.appendChild(criarTexto)
    document.body.appendChild(criarP) 

})
