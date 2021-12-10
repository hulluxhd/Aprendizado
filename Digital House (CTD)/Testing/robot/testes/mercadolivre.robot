*** settings ***
library  SeleniumLibrary

*** variables ***

*** test case ***
Mercado Livre
  Acessar o site do mercado Livre
  Faça uma busca por Iphone 12
  Clicar no primeiro resultado da busca


*** keywords ***
Acessar o site do mercado Livre
  Open Browser  https://mercadolivre.com.br  Firefox

Faça uma busca por Iphone 12
  Input Text  css=#cb1-edit  iPhone12 
  Click Element css=body > header > div > form > button
Clicar no primeiro resultado da busca
  Click Element css= li.ui-search-layout__item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(1) > h2:nth-child(1)
  

