*** variables ***
${SITE}                   https://www.saucedemo.com/
${NAVEGADOR}              Firefox
${CAMPO_USUARIO}          css=#user-name
${CAMPO_SENHA}            css=#password
${USUARIO}                standard_user
${SENHA}                  secret_sauce
${BOTAO_LOGIN}            css=#login-button
${PRIMEIRO_ELEMENTO}      css=#item_4_title_link > div:nth-child(1)
${BOTAO_ADD_CARRINHO}     css=#add-to-cart-sauce-labs-backpack
${CARRINHO}               css=.shopping_cart_link
${BOTAO CARRINHO}         css=#checkout
${FIRST NAME}             css=#first-name
${LAST_NAME}              css=#last-name
${ZIP_CODE}               css=#postal-code
${BOTAO_CONTINUE_CHECKOUT}  css=#continue
${BOTAO_FINISH}           css=#finish
${PRIMEIRO_NOME}          Denny
${SEGUNDO_NOME}           Ribeiro
${CEP}                    61910000

*** Keywords ***
Abrir a loja
  Open Browser  ${SITE}  ${NAVEGADOR}
  Maximize Browser Window
  Set Selenium Speed  0.75

Fazer login
  Wait Until Element is Visible         ${CAMPO_USUARIO}
  Input Text        ${CAMPO_USUARIO}    ${USUARIO}
  Input Text        ${CAMPO_SENHA}      ${SENHA}
  Wait and Click                        ${BOTAO_LOGIN}

Wait and Click
  [Arguments]                           ${ELEMENTO}
  Wait Until Element is Visible         ${ELEMENTO}
  Click Element                         ${ELEMENTO}

Clicar no primeiro item disponivel
  Wait and Click                        ${PRIMEIRO_ELEMENTO}

Clicar no botao de adicionar ao carrinho
  Wait and Click                        ${BOTAO_ADD_CARRINHO} 

Clicar no carrinho
  Click Element                         ${CARRINHO}     

Clicar em checkout
  Wait and Click                        ${BOTAO CARRINHO}   

Preencher informacoes do checkout e avancar
  Input Text                            ${FIRST NAME}  ${PRIMEIRO_NOME}
  Input Text                            ${LAST_NAME}   ${SEGUNDO_NOME}
  Input Text                            ${ZIP_CODE}     ${CEP}
  Wait and Click                        ${BOTAO_CONTINUE_CHECKOUT}

Clicar no botao finish
  Wait and Click                        ${BOTAO_FINISH}

Fechar navegador
  Close Browser
  