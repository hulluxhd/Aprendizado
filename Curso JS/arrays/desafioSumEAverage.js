function sum(){
    let numbers = [...arguments]
    return numbers.reduce(function(acc, atual){
        return acc + atual
    }, 0)
}
let average = function () {
    return sum(...arguments) / arguments.length
}

function argumentos(){
    console.log({...arguments})
}

let arr = [10, 20, 30, 40]
console.log(argumentos(1,2,3,4,5,6))
console.log(sum(1,2,3,4))
console.log(average(1,2,3,4))