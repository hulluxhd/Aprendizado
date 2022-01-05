const paragrafos = document.querySelectorAll('.card p')
const original = [...paragrafos].map(p => p.textContent)
const maxLength = 100
    ;
[...paragrafos].forEach((p, i) => {
    if (p.innerText.length > maxLength) {
        p.textContent = p.innerText.substring(0, maxLength) + '...'

        //adiciona o btn aqui mesmo
        const btn = document.createElement('button')
        btn.innerHTML = '<i class="fas fa-chevron-down"></i>'
        p.parentElement.classList.add('text-hidden')
        p.parentElement.appendChild(btn) // adiciona na div
        //btn.addEventListener('click', toggleText)
        btn.addEventListener('click', function(e){
            toggleText(e, p, i)
        })
    }
});

function toggleText(e, p, i) {
    const card = e.currentTarget.parentElement
    console.log(card)
    card.classList.toggle('text-hidden')
    e.currentTarget.querySelector('i').classList.toggle('fa-chevron-down')
    e.currentTarget.querySelector('i').classList.toggle('fa-chevron-up')

    if(card.classList.contains('text-hidden')){
        p.textContent = original[i].slice(0, maxLength)
    } else{
        p.textContent = original[i]
    }
}