*Variables*
# Conheça nossos cursos (serve para todos)
${CONHECA_CURSOS}                   xpath=//a[contains(text(),'Conheça nossos cursos')]

# Selecionar cursos
${DATA_ANALYTICS}                   css=.w-full:nth-child(1) > .block > .text-base

${DATA_SCIENCE}                     css=.w-full:nth-child(2) .text-base

${DESENVOLVIMENT0_MOBILE_ANDROID}   css=.w-full:nth-child(3) > .block .text-center

${DESENVOLVIMENT0_MOBILE_IOS}       css=.w-full:nth-child(4) > .block .text-base

${DESENVOLVIMENT0_WEB_FULLSTACK}    css=.w-full:nth-child(5) > .block .text-base

${CTD}                              css=.w-full:nth-child(10) > .block .text-center


# Seletores do subtítulo
${SELETOR_SUBTITULO_DATA_ANALYTICS}                     xpath=//div[@id='__next']/div/main/section/div/div/div/div/div/p

${SELETOR_SUBTITULO_DATA_SCIENCE}                       xpath=//div[@id='__next']/div/main/section/div/div/div/div/div/p

${SELETOR_SUBTITULO_DESENVOLVIMENT0_MOBILE_ANDROID}     xpath=//div[@id='__next']/div/main/section/div/div/div/div/div/p

${SELETOR_SUBTITULO_DESENVOLVIMENT0_MOBILE_IOS}         xpath=//div[@id='__next']/div/main/section/div/div/div/div/div/p

${SELETOR_SUBTITULO_DESENVOLVIMENT0_WEB_FULLSTACK}      xpath=//div[@id='__next']/div/main/section/div/div/div/div/div/p

${SELETOR_SUBTITULO_CTD}                                xpath=//div[@id='uJoXSc4pmpxQqCNPVe60oOnXzvTHiJXF']/h1/font/b


# Verificar subtitulos
${SUBTITULO_DATA_ANALYTICS}     Transforme grandes quantidades de dados em insights

${SUBTITULO_DATA_SCIENCE}       Machine learning, inteligência artificial e tudo mais sobre a ciência de dados

${SUBTITULO_MOBILE_ANDROID}     Crie seu próprio app do zero em até 5 meses

${SUBTITULO_MOBILE_IOS}         Aprenda Swift e crie seu próprio app em até 5 meses

${SUBTITULO_FULL_STACK}         Aprenda a criar sites e aplicativos web, do começo ao fim.

${SUBTITULO_CTD}                Crie novas formas de viver o mundo

# Verificar se a página contem o termo xpto
${TERMO_DATA_ANALYTICS}         manipulação e análise de dados

${TERMO_DATA_SCIENCE}           processamento e análise de grandes quantidades de dados

${TERMO_MOBILE_ANDROID}         desenvolver aplicações móveis como um programador profissional

${TERMO_MOBILE_IOS}             criar apps estáveis, funcionais e atrativos

${TERMO_FULL_STACK}             integração do front-end com o back-end

${TERMO_CTD}                    Venha desenvolver uma carreira que pode mudar o mundo

# Clicar em inscreva-se
${INSCREVA}                     xpath=(//a[contains(text(),'Inscreva-se')])[2]


# Validar valor dos cursos (elemento)
${VALOR_9K}                     xpath=//div[@id='__next']/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span

${VALOR_DATA_SCIENCE}           xpath=//div[@id='__next']/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span

${VALOR_MOBILE_IOS}             xpath=//div[@id='__next']/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span

${VALOR_FULL_STACK}             xpath=//div[@id='__next']/div/main/section[2]/div/div[2]/dl/div/div[4]/div/div/span

# Validar valor dos cursos (em R$)
${RS_9K}                         R$ 9.824,00  
${RS_DATA_SCIENCE}               R$ 11.312,00
${RS_MOBILE_IOS}                 R$ 8.269,00
${RS_FULL_STACK}                 R$ 9.824,00


# Campos CTD
${NOME}                         css=#SPxdIrhGPqy1WTAe5qzVoB7MONOoSOZB
${SOBRENOME}                    css=#DyESSyoTrg8EZUGtiPbmZmuL5y03FlCN
${EMAIL}                        css=#Lbqhh6B7SmT1OnakIxZ0TBmT2o2IxVNq
${CELULAR}                      css=#zVe3bzxdSNmVk5qFPuJgonal9LqQMlq8
${ESTADO}                       css=#FhKAsNwtv8stLHRSHxLfxd7lkcUMkiM6
${ESTADO_LABEL}                 Ceará     
${COMO_FICOU_SABENDO}           xpath=//*[@id="FhKAsNwtv8stLHRSHxLfxd7lkcUMkiM6"]

${COMO_FICOU_SABENDO_LABEL}     Eventos
${CTD_COOKIES}                  css=#btn-cookie-consent

*Keywords*
#GERAL
Wait and Click
  [Arguments]                    ${ELEMENTO}
  Wait Until Element is Visible  ${ELEMENTO}
  Click Element                  ${ELEMENTO}

Aceitar os cookies
   Sleep  1
   Select frame                 xpath=/html/body/iframe[2]
   Click Element                xpath=/html/body/div/div/div[1]/div[1]/div[2]/div[1]/div[2]
   Unselect frame

Aceitar os cookies CTD
   Sleep  1
   Click Element            ${CTD_COOKIES}
   
Clicar em conheca nossos cursos 
    Wait and Click          ${CONHECA_CURSOS}

Clicar em “Inscreva-se”
  Wait and Click            ${INSCREVA}

Validar se o valor do curso é “R$ 9.824,00”  # Se usa mais de uma vez
  Element Should Contain    ${VALOR_9K}  ${RS_9K}

# DATA ANALYTICS
Selecionar o curso Data Analytics
    Wait and Click          ${DATA_ANALYTICS}

Verificar se o subtitulo do curso corresponde a "Transforme grandes quantidades de dados em insights"
    Element Should Contain  ${SELETOR_SUBTITULO_DATA_ANALYTICS}  ${SUBTITULO_DATA_ANALYTICS}

Verificar se a pagina contem o termo "manipulacão e análise de dados"  
    Page Should Contain     ${TERMO_DATA_ANALYTICS}   



# DATA SCIENCE
Selecionar o curso “Data Science”
  Wait and Click            ${DATA_SCIENCE}

Verificar se o subtitulo do curso corresponde a “Machine learning, inteligência artificial e tudo mais sobre a ciência de dados”
  Element Should Contain    ${SELETOR_SUBTITULO_DATA_SCIENCE}  ${SUBTITULO_DATA_SCIENCE}

Verificar se a página contém o termo “processamento e análise de grandes quantidades de dados”
  Page Should Contain       ${TERMO_DATA_SCIENCE}

Validar se o valor do curso é “R$ 11.312,00”
  Element Should Contain    ${VALOR_DATA_SCIENCE}  ${RS_DATA_SCIENCE}

# DESENVOLVIMENTO MOBILE ANDROID (Turmas encerradas)
Selecionar o curso “Desenvolvimento Mobile Android”
    Wait and Click          ${DESENVOLVIMENT0_MOBILE_ANDROID}

Verificar se o subtitulo do curso corresponde a “Crie seu próprio app do zero em até 5 meses”
    Element Should Contain  ${SELETOR_SUBTITULO_DESENVOLVIMENT0_MOBILE_ANDROID}  ${SUBTITULO_MOBILE_ANDROID}

Verificar se a página contém o termo “desenvolver aplicações móveis como um programador profissional”
    Page Should Contain     ${TERMO_MOBILE_ANDROID}

# DESENVOLVIMENTO MOBILE IOS
Selecionar o curso “Desenvolvimento Mobile IOS”
    Wait and Click          ${DESENVOLVIMENT0_MOBILE_IOS}

Verificar se o subtitulo do curso corresponde a “Aprenda Swift e crie seu próprio app em até 5 meses”
    Element Should Contain  ${SELETOR_SUBTITULO_DESENVOLVIMENT0_MOBILE_IOS}  ${SUBTITULO_MOBILE_IOS}

Verificar se a página contém o termo “criar apps estáveis, funcionais e atrativos”
    Page Should Contain     ${TERMO_MOBILE_IOS}

Validar se o valor do curso é “R$ 8.269,00”
    Element Should Contain  ${VALOR_MOBILE_IOS}  ${RS_MOBILE_IOS}

# DESENVOLVIMENTO WEB FULL STACK
Selecionar o curso “Desenvolvimento Web Full Stack”
    Wait and Click          ${DESENVOLVIMENT0_WEB_FULLSTACK}

Verificar se o subtitulo do curso corresponde a “Aprenda a criar sites e aplicativos web, do começo ao fim.”
    Element Should Contain  ${SELETOR_SUBTITULO_DESENVOLVIMENT0_WEB_FULLSTACK}  ${SUBTITULO_FULL_STACK}

Verificar se a página contém o termo “integração do front-end com o back-end”
    Page Should Contain     ${TERMO_FULL_STACK}

# CTD
Selecionar o curso “Certified Tech Developer”
    Wait and Click          ${CTD}

Verificar se o subtitulo do curso corresponde a “Crie novas formas de viver o mundo”
    Element Should Contain  ${SELETOR_SUBTITULO_CTD}    ${SUBTITULO_CTD}

Verificar se a página contém o termo “Venha desenvolver uma carreira que pode mudar o mundo”
    Page Should Contain     ${TERMO_CTD}

Preencher os campos do formulário “Faça parte do futuro digital”
    Sleep  1
    Input text              ${NOME}  Denny
    Sleep  1
    Input text              ${SOBRENOME}  Ribeiro
    Sleep  1
    Input text              ${EMAIL}    denny.ribeiro@outlook.com
    Sleep  1
    Input text              ${CELULAR}  85981385830
    Sleep  1
    
    # Os comandos de selecionar e escolher de um dropdown estão dando muitos problemas
    # "Element is not clickable because another element obscures it"
    #Select From List By Value   ${ESTADO}   Ceará
    #Sleep  1
    #Select From List   ${COMO_FICOU_SABENDO}   Facebook
    
  