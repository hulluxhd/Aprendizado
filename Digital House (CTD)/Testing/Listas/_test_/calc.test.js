
const {soma, subtracao, divisao, multiplicacao} = require('../../calctest.js');

describe('Teste de soma', () => {

    test('Soma de 2 números', () =>{
        expect(soma(1,2)).toBe(3);
    })
})



describe('Teste de subtracao', () => {

    test('subtracao de 2 números', () =>{
        expect(subtracao(5,2)).toBe(3);
    })
})



describe('Teste de multiplicacao', () => {

    test('multiplicacao de 2 números', () =>{
        expect(multiplicacao(5,2)).toBe(10);
    })
})



describe('Teste de divisao', () => {

    test('divisao de 2 números', () =>{
        expect(divisao(6,3)).toBe(2);
    })
})