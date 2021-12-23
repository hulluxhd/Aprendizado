(function () {
    'use strict';

    const titulo = document.getElementById('txtTitulo')
    const btn = document.getElementById('btn')
    const txtArea = document.getElementById('txtDescricao')
    const check = document.getElementById('chkAceito')
    const contador = document.getElementById('contador')
    const resta = contador.querySelectorAll('span')[0]
    const form = document.querySelector('.formCadastro')
    const feedback = document.getElementById('feedbackMessage')
    const closeEventError = feedback.getElementsByTagName('button')[0]
    let maximo = parseInt(txtArea.maxLength)

    caracMaximo(maximo)

    function caracMaximo(n) {
        resta.textContent = n
    }




    // mano que doidera

    // essa função vai ser chamada quando algum campo não for preenchido
    // vai adicionar uma classeao elemento de feedback, que vai fazê-lo aparecer
    // depois criar um event handler, com uma função atrelada
        // quando o usuário clicar no botão de fechar, vai disparar a função hideErrorMessage
        // essa função remove a classe "show", e também remove o próprio listener. Isso evita que a função seja chamada muitas vezes, repetidamente. Criar, executa, destrói
        // por fim, se o parametro de callback for uma função, executa-a
    function showEventError(msg, cb) {
        feedback.firstElementChild.textContent = msg
        feedback.classList.add('show')
        closeEventError.focus()
        closeEventError.addEventListener('click', hideErrorMessage)
        closeEventError.addEventListener('keyup', apertouEsc)

        function apertouEsc(e){
            if(e.keyCode === 27){
                hideErrorMessage()
            }
        }

        function hideErrorMessage() {
            feedback.classList.remove('show')
            closeEventError.removeEventListener('keyup', apertouEsc)
            closeEventError.removeEventListener('click', hideErrorMessage)
            if (typeof cb === 'function') {
                cb()
            }
        }


    }





    txtArea.addEventListener('input', function () {
        let digitado = parseInt(txtArea.value.length)
        let restante = maximo - digitado
        caracMaximo(restante)
    })

    form.addEventListener('submit', function (e) {
        if (!titulo.value) {
            e.preventDefault()
            showEventError('Preencha os campos', function () {
                titulo.focus()
            })
        } else if (!txtArea.value) {
            e.preventDefault()
            showEventError('Preencha a descrição', function(){
                txtArea.focus()
            })
        }
    })

    check.addEventListener('change', function () {
        btn.disabled = !check.checked
    })





})()