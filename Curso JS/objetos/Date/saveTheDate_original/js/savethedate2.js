(function () {
    const completeDate = document.querySelector('.hero-content h1 span').innerText


    const dateEvent = separarData(completeDate) // é a data passada no span
    console.log(dateEvent)

    // vamos criar agora uma data para HOJE




    const p = document.createElement('p')
    document.querySelector('.hero-content').insertAdjacentElement('beforeend', p)

    const SECONDS = 1000
    const MINUTES = 60 * SECONDS
    const HOUR = 60 * MINUTES
    const DAY = 24 * HOUR

    function updateDate(){
        const dateToday = new Date()
        let dateLeft = dateEvent.getTime() - dateToday.getTime()
        const daysLeft = parseInt(dateLeft / DAY)
        dateLeft = dateLeft - daysLeft * DAY
        const hoursLeft = parseInt(dateLeft / HOUR)
        dateLeft = dateLeft - hoursLeft * HOUR
        const minutesLeft = parseInt(dateLeft / MINUTES)
        dateLeft = dateLeft - minutesLeft * MINUTES
        const secondsLeft = parseInt(dateLeft / SECONDS)
        dateLeft = dateLeft - secondsLeft * SECONDS

        addToHTML(daysLeft, hoursLeft, minutesLeft, secondsLeft)
    }

    function addToHTML(dia, hora, minuto, segundo) {
        p.textContent = `Contagem: ${dia} dias, ${hora} horas, ${minuto} minutos, ${segundo} segundos`
    }

    setInterval(updateDate, 500)










    function separarData(string) {
        const [data, hora] = string.split(' ')
        const [dia, mes, ano] = data.split('/')
        const [h, min] = hora.split('H')
        // ano, mes, dia | padrão en-US
        return new Date(ano, mes - 1, dia, h, min)

    }

})()