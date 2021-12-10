
const {soma} = require('../../calctest.js');

describe('Teste de soma', () => {

    test('Soma de 2 números', () =>{
        expect(soma(1,2)).toBe(3);
    })
})



