function quantoFaltaPara(m, d) {
    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()
    const dataNiver = new Date(anoAtual, m -1, d)

    const dataAtualTS = dataAtual.getTime()
    let dataNiverTS = dataNiver.getTime()

    if(dataNiverTS < dataAtualTS){
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = dataNiver.getTime()
    }
    const diferenca = (dataNiverTS - dataAtualTS)/ (24*60*60*1000) // em comparações o mais correto é usar timestamps, pois são mais acurados 

    return diferenca

   /*  const diasFaltam = (d - (dataAtual.getDate()))
    const mesesFaltam = (m - (dataAtual.getMonth() + 1))
    let quantoFalta = mesesFaltam * 30 + diasFaltam // perco os dias quem tem mes 31. É recomendado rodar essa função com timestamps
    return quantoFalta < 0 ? (365 + quantoFalta) : quantoFalta
 */
}
