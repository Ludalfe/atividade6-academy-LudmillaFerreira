Feature: Criar usuario
Como um usuário do sistema
Desejo criar um usuario
Para ter acesso às funcionalidades do Banco



Scenario: Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário.
    Given acessei a tela de cadastro
    When informo os dados do usuario inexistente
    | email | ludz7@raro.com.br |
    | nome | Luds           |
    Then visualizamos uma mensagem de erro 'Este e-mail já é utilizado por outro usuário.'

Scenario: Realizando um cadastro com sucesso
    Given acessei a tela de cadastro
    When informo os dados do usuario com email e nome validos
    Then visualizamos a mensagem de sucesso 'Usuário salvo com sucesso'

Scenario: Não deve ser possível realizar um cadastro com e-mail em um formato inválido.
    Given acessei a tela de cadastro
    When informo os dados do usuario com um e-mail em um formato invalido
    | email | formatoInvalido@raro@com.br |
    | nome | Luds           |
    Then visualizamos uma mensagem de erro relacionado ao formato de email informado 'Formato de e-mail inválido'


Scenario: Não deve ser possível cadastrar um nome com mais de 100 caracteres.
    Given acessei a tela de cadastro
    When informo os dados do usuario com o nome com mais de 100 caracteres
    | email | ludz7@raro.com.br |
    | nome | LudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLd |
    Then visualizamos uma mensagem de erro relacionado ao tamanho do nome informado 'Informe no máximo 100 caracteres para o nome'


Scenario: Não deve ser possível cadastrar um email com mais de 60 caracteres.
    Given acessei a tela de cadastro
    When informo os dados do usuario com o email com mais de 60 caracteres
    | email | LudLudLudLudLudLudLudLudLudLudLudLudLudLudLudLudlud@gmail.com |
    | nome | Ludz |
    Then visualizamos uma mensagem de erro relacionado ao tamanho do email informado 'Informe no máximo 60 caracteres para o e-mail'


    