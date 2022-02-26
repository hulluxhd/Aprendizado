const str1 = 'testando esta string'
const str2 = 'nao to entendendo nada; mentira, to sim'




String.prototype.rAll = function (search, newString) {
    return this.valueOf().split(search).join(newString) //que elegante meu irmão: corta no primeiro parametro, junta no segundo. Massa
}

console.log(str1.rAll('tes', 's'))
