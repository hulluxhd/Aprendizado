
let cards = document.getElementsByTagName('p')
let arrOriginal = [];

[...cards].forEach(function (p) {
    arrOriginal.push(p.innerText)
    verificaTexto(p)


    p.addEventListener('click', function (e) {
        if (e.target.nodeName === 'I') {
            

            let botao = e.target.parentElement
            botao.toggleAttribute('down')
            
            if (botao.hasAttribute('down')) {
                verificaTexto(this)
                console.log('2')
            } else {
                let index = [...cards].indexOf(e.target.parentElement.parentElement)
                this.textContent = arrOriginal[index]
                this.className = ''
                addBtn(this, false)
                console.log('3')
            }
        } else {
            return
        }
    })
})



function addBtn(p, boolean) { //true para down, false para up
    let btn = document.createElement('button')
    if (boolean == false) {
        btn.innerHTML = `<i class="fas fa-chevron-up"></i>`
    } else {
        btn.setAttribute('down', '')
        btn.innerHTML = `<i class="fas fa-chevron-down"></i>`

    }
    p.parentElement.appendChild(btn)
}

function verificaTexto(parag) {
    if (parag.textContent.length > 100) {
        parag.textContent = parag.textContent.slice(0, 101) + '...'
        parag.className = 'card text-hidden'
        addBtn(parag)
    }
}