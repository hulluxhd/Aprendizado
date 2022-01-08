(function () {
    const completeDate = document.querySelector('.hero-content h1 span').innerText


    const dateEvent = separarData(completeDate) // é a data passada no span
    console.log(dateEvent)

    // vamos criar agora uma data para HOJE
    const dateToday = new Date()

    // agora, o jeito mais fácil de comparar o tempo restante é transformar as duas datas em timestamp e subtrair

    let dateLeft = dateEvent.getTime() - dateToday.getTime()

    // criando constantes para segundos, minutos, horas e dia, em milisec

    const SECONDS = 1000
    const MINUTES = 60 * SECONDS
    const HOUR = 60 * MINUTES
    const DAY = 24 * HOUR
    console.log(dateLeft)
    console.log(dateLeft / DAY)


    // criando as constantes que informarão o quanto de tempo que falta, e logo em seguida retira essa qtd de milisec da variavel dateLeft, até zerá-la

    const daysLeft = parseInt(dateLeft / DAY)
    dateLeft = dateLeft - daysLeft * DAY
    console.log(dateLeft/DAY)
    console.log(daysLeft)

    const hoursLeft = parseInt(dateLeft / HOUR)
    dateLeft = dateLeft - hoursLeft * HOUR
    console.log(dateLeft/HOUR)
    console.log(hoursLeft)

    
    const minutesLeft = parseInt(dateLeft / MINUTES)
    dateLeft = dateLeft - minutesLeft * MINUTES
    console.log(dateLeft/MINUTES)
    console.log(minutesLeft)


    const secondsLeft = parseInt(dateLeft / SECONDS)
    dateLeft = dateLeft - secondsLeft * SECONDS
    console.log(dateLeft/SECONDS)
    console.log(secondsLeft)

    addToHTML(daysLeft, hoursLeft, minutesLeft, secondsLeft)

    function addToHTML(dia, hora, minuto, segundo){
        const p = document.createElement('p')
        p.textContent = `Contagem: ${dia} dias, ${hora} horas, ${minuto} minutos, ${segundo} segundos`
        document.querySelector('.hero-content').insertAdjacentElement('beforeend', p)
    }











    function separarData(string) {
        const [data, hora] = string.split(' ')
        const [dia, mes, ano] = data.split('/')
        const [h, min] = hora.split('H')
        // ano, mes, dia | padrão en-US
        return new Date(ano, mes - 1, dia, h, min)

    }

})()