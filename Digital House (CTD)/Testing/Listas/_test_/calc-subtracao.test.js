
const {subtracao} = require('../../calctest.js');


describe('Teste de subtracao', () => {

    test('subtracao de 2 números', () =>{
        expect(subtracao(5,2)).toBe(3);
    })
})