let a1 = [1, 2, 3, 10, 20, 30]

let b1 = a1.includes('teste')
console.log(b1)

let b2 = a1.indexOf(10)
console.log(b2)

let b3 = a1.lastIndexOf(30)
console.log(b3)

let b4 = a1.find(el => {
    el > 10
})
console.log(b4)

let b5 = a1.findIndex(el => {
    el >= 1
})
console.log(b5)


let b6 = a1.map(function (el) {
    return el * el
})
console.log(b6)


b6.forEach((el) => {
    console.log(typeof el)
})

let b7 = a1.every(el => {
    typeof el == 'number'
})
console.log(b7)

let b8 = a1.some(el => {
    typeof el === "string"
})
console.log(b8)