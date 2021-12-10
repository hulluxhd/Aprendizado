# DENNY DE PAULA RIBEIRO PESSOA
# TURMA 1


*Settings*

Library  SeleniumLibrary
Resource  ./digitalhouse.resource

Test Setup  Open Browser  https://www.digitalhouse.com/br  Firefox

Test Teardown  Close Browser

*Test Cases*

Validacao das informacoes do curso de Data Analytics
  Aceitar os cookies
  Clicar em conheca nossos cursos
  Selecionar o curso Data Analytics
  Verificar se o subtitulo do curso corresponde a "Transforme grandes quantidades de dados em insights"
  Verificar se a pagina contem o termo "manipulacão e análise de dados"
  Clicar em “Inscreva-se”
  Validar se o valor do curso é “R$ 9.824,00”

Validação das informações do curso de Data Science
  Aceitar os cookies
  Clicar em conheca nossos cursos
  Selecionar o curso “Data Science”
  Verificar se o subtitulo do curso corresponde a “Machine learning, inteligência artificial e tudo mais sobre a ciência de dados”
  Verificar se a página contém o termo “processamento e análise de grandes quantidades de dados”
  Clicar em “Inscreva-se”
  Validar se o valor do curso é “R$ 11.312,00”

Validação das informações do curso de Desenvolvimento Mobile Android
  Aceitar os cookies
  Clicar em conheca nossos cursos
  Selecionar o curso “Desenvolvimento Mobile Android”
  Verificar se o subtitulo do curso corresponde a “Crie seu próprio app do zero em até 5 meses”
  Verificar se a página contém o termo “desenvolver aplicações móveis como um programador profissional”
  

Validação das informações do curso de Desenvolvimento Mobile IOS
  Aceitar os cookies
  Clicar em conheca nossos cursos
  Selecionar o curso “Desenvolvimento Mobile IOS”
  Verificar se o subtitulo do curso corresponde a “Aprenda Swift e crie seu próprio app em até 5 meses”
  Verificar se a página contém o termo “criar apps estáveis, funcionais e atrativos”
  Clicar em “Inscreva-se”
  Validar se o valor do curso é “R$ 8.269,00”


Validação das informações do curso de Desenvolvimento Web Full Stack
  Aceitar os cookies
  Clicar em conheca nossos cursos
  Selecionar o curso “Desenvolvimento Web Full Stack”
  Verificar se o subtitulo do curso corresponde a “Aprenda a criar sites e aplicativos web, do começo ao fim.”
  Verificar se a página contém o termo “integração do front-end com o back-end”
  Clicar em “Inscreva-se”
  Validar se o valor do curso é “R$ 9.824,00”

Validação das informações do curso Certified Tech Developer
  Aceitar os cookies
  Clicar em conheca nossos cursos
  Selecionar o curso “Certified Tech Developer”
  Aceitar os cookies CTD
  Verificar se o subtitulo do curso corresponde a “Crie novas formas de viver o mundo”
  Verificar se a página contém o termo “Venha desenvolver uma carreira que pode mudar o mundo”
  Preencher os campos do formulário “Faça parte do futuro digital”


