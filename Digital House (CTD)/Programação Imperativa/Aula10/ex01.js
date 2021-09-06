let array = ["arroz", "feijão","legumes","folhas", "frutas"];
console.log(array)
//join
console.log("O método 'Join' junta os itens de um array e os transforma em string, separando-os com um caractere à escolha. Resultado: " + array.join(' *-* '));
console.log("*************************************************************");
//pop()
console.log("O método pop() eliminar o último item de um array. Eliminado: "+array.pop()+"\nResultado: "+array);
console.log("*************************************************************");
console.log("O método push() adiciona um elemento na última posição de um array. Resultado: "+array.push("cajá"));
console.log("*************************************************************");
console.log("O método shift() elimina o primeiro elemento de um array. Eliminado: "+array.shift());
console.log("*************************************************************");
console.log("O método unshift() adiciona um elemento na primeira posição de um array. Adicionado: "+array.unshift("frango"));


