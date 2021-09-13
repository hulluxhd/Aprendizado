let carro = {
    placa: 'DRU2258',
    cor: 'preto',
    ano: 2021,
    flex: true,
    mostra: function(){
        return 'Características do seu carro\nPlaca: '+this.placa+ '\nCor: '+carro.cor+'\nAno: '+carro.ano+'\nFlex: '+carro.flex;
    }
}

//acessando o objeto literal
console.log(carro.mostra())