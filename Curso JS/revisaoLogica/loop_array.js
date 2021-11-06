let randomNumberGen = (a) => {
   return parseInt(Math.random() * a)
}

let arr = [];
while(arr.length <= 20){
    let randomNumber = randomNumberGen(31);
    if(arr.indexOf(randomNumber) < 0){
        arr.push(randomNumber)
    }
}
console.log(arr)
