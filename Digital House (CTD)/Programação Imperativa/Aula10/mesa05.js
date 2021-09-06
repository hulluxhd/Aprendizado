function join(letras){
    if (letras.length==2){
    let str=letras[0]+letras[1];
    console.log(str);
}   else if(letras.length==3){
    let str=letras[0]+letras[1]+letras[2];
    console.log(str);
}
}

join(["o","l","á"])