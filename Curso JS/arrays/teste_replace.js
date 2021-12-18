let a = [1,3,4,4,5,6,7,6,4,7,9,10]

let b = a.reduce(function(acc, cur){
    if(acc.indexOf(cur) < 0){
        acc.push(cur)
    }
    return acc.reverse().splice(0, 10).slice(0, 5)

}, [])
b.push(100)
console.log(b)