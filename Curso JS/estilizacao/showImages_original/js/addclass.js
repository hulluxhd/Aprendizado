(function () { // o  objetivo é animar as imagens baseando-se no scroll do mouse
    document.body.classList.remove('no-js') 
    let imagens = [...document.querySelectorAll('[data-addclass-on-scroll]')] // seleciona as imagens que tem o atributo e transforma-as em um array


    window.addEventListener('scroll', addClassOnScroll)

    function isInView(img) { // função que verifica se a imagem está na viewport
        let rect = img.getBoundingClientRect() 
        return (rect.top < 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= innerHeight) // .top < 0 : o elemento está saindo da viewport. .bottom >= 0 : o elemento não saiu da viewport ainda. 
        // .top >= 0 : o elemento ainda vai entrar ou ainda não está saindo 
        // .bottom <= innerHeight : não saiu da viewport
    }

    function addClassOnScroll() {
        if(imagens.length === 0){ // remove o handler se o array de imagens chegar a 0
            window.removeEventListener('scroll', addClassOnScroll)
            console.log('removido handler')
        }
        imagens.forEach(img => { 
            if (isInView(img)) { // testa se o elemento está na viewport
                let delay = img.getAttribute('data-addclass-on-scroll-delay') // usa o delay para o timeout
                setTimeout(function () {  // depois de aparecer na tela, o delay informa quanto tempo para a animação ocorrer
                    let _class = img.getAttribute('data-addclass-on-scroll') // nome da classe a ser adicionada
                    img.classList.add(_class)
                    img.removeAttribute('data-addclass-on-scroll')
                    img.removeAttribute('data-addclass-on-scroll-delay')
                    imagens = [...document.querySelectorAll('[data-addclass-on-scroll]')] // varre novamente o array de imagens, para atualizá-lo
                }, delay)
            }
        })
    }
})()