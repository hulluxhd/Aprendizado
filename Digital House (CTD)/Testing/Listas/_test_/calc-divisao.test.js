
const {divisao} = require('../../calctest.js');



describe('Teste de divisao', () => {

    test('divisao de 2 números', () =>{
        expect(divisao(6,3)).toBe(2);
    })
})