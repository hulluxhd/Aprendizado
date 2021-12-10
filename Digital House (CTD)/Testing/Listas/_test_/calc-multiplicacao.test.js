
const {multiplicacao} = require('../../calctest.js');

describe('Teste de multiplicacao', () => {

    test('multiplicacao de 2 números', () =>{
        expect(multiplicacao(5,2)).toBe(10);
    })
})






