(function () {
    // adicionando efeito paralax nas background-images. Para isso, deve-se manipular as propriedades de background position
    window.addEventListener('scroll', posicao) // add handler ao scroll (toda vez que scrollar, dispara o evento)
    let elementosParalax = document.querySelectorAll('[data-paralax]') // seleciona e guarda em array aqueles elementos que contém o atributo data-paralax, que por sua vez serão selecionados para utilizar o efeito paralax

    function posicao() {
        elementosParalax.forEach(elemento => {
            let originalPosY = getComputedStyle(elemento).backgroundPositionY // pegando as posições originais de x e y da imagem
            let originalPosX = getComputedStyle(elemento).backgroundPositionX

            if (isGettingOut(elemento)) { // verifica se o elemento está saindo do campo de visão (top < 0)
                elemento.style.backgroundPosition = `${originalPosX} ${calculaPosicao(elemento)}px`
            } else {
                elemento.style.backgroundPosition = `${originalPosX} ${originalPosY}px`
            }
            console.log(elemento.style.backgroundPositionY, pageYOffset)

        })
    }
    function calculaPosicao(elemento) { // recupera a 'velocidade' com que o backround-image deve se movimentar. Após isso, calcula a nova posição de Y. Na prática, esta função irá verificar o quanto que o scroll já "andou" e vai setar uma porcentagem de o quanto o background image deve também 'andar'
        let v = parseFloat(elemento.getAttribute('data-p-velocity')) || 0.5 // no caso de 0.5, a imagem vai 'andar' a metade do movimento total do scroll. Tanto é que se dermos um console.log na posição de backgroundPositionY e o pageYOffset, verificamos a paridade
        return elemento.getBoundingClientRect().top * v * -1 // 
    }

    function isGettingOut(elemento) {
        return elemento.getBoundingClientRect().top <= 0
    }

    posicao()

})()