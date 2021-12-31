function Task(name, boolean) {
    "use strict" // força o uso da palavra reservada 'new' e impede que o dev tente criar instâncias com o 'this' global
    let _name = name // guardamos o name em uma variável para evitar sua manipulação direta por meio do objeto. Assim, ela está encapsulada (private)
    this.getName = function () {return _name} // as funções podem ser criadas dentro ou fora do objeto, mas dê preferência a criar dentro. Esta é uma função de 'get', como nos getters and setters do java
    this.createdAt = new Date()
    this.updatedAt = null
    this.completed = boolean
    this.changeName = function(newName){ // aqui é um 'set', na prática
        _name = newName
        this.updatedAt = new Date()
    }
}


let task1 = new Task('teste')
console.log(task1.getName())
task1.changeName('testando')
console.log(task1.getName())
console.log(task1)
task1.completed = true
console.log(task1)


