function formatarNome(nome) {

    if (nome.indexOf(' ') < 0) {
        return nome
    } else {
        const nomePicotado = nome.split(' ')
        const primeiroNome = nomePicotado.splice(0, 1)
        return `${nomePicotado.join(' ')}, ${primeiroNome}`


}
}
console.log(formatarNome('Daniel Tapias Morales'))