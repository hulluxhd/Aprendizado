*** Settings ***
Library      SeleniumLibrary
Resource     ./pratica.resource


*** Test Cases ***
Processo de compra da loja SauceDemo
  Abrir a loja
  Fazer login
  Clicar no primeiro item disponivel
  Clicar no botao de adicionar ao carrinho
  Clicar no carrinho
  Clicar em checkout
  Preencher informacoes do checkout e avancar
  Clicar no botao finish
  Fechar navegador


