const alice = ["Alice",23,82,46];
const bob = ["Bob",45,8,100];

function ganhador(a,b){
    let votosA= 0;
    let votosB = 0;
    for(i=1;i<=a.length; i++){
        if(a[i]>b[i]){
            votosA++;
        } else if(a[i]<b[i]){
            votosB++;
        }
    }
    if(votosA > votosB){
        console.log("O vendedor é: "+a[0]+"!");
    }   else
        console.log("O vencedor é: "+b[0]+"!");
}
ganhador(alice,bob)