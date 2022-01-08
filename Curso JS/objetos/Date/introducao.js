// DATE cria uma instância javascript do objeti Date, que representa um único momento no tempo. 

const data = new Date()
console.log(data)
console.log(data.getDate())
console.log(data.getDay())
console.log(data.getHours())
console.log(data.getSeconds())
console.log(data.getTimezoneOffset())
console.log(typeof data)
console.log('----------')
console.log(data.toString())
console.log(data.toTimeString())
console.log(data.toLocaleString('pt-BR', {day: 'numeric', month: 'long', weekday: 'long'}))
console.log(data.toLocaleDateString())


// o método toLocaleString() retorna uma string com a representação de parte da data baseando-se no idioma. Os argumentos locales e options deixam as aplicações especificarem o idioma cujas convenções de formatação devem ser usadas e permitem customizar o comportamento da função.
// sintaxe: dateObj.toLocaleDateString([locales, [options]])

// O objeto recém criado terá métodos intrínsecos ao construtor, com getters e setters