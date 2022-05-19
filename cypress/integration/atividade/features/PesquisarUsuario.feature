Feature: Pesquisar usuario

Como uma pessoa qualquer
Desejo pesquisar usuário por nome ou e-mail
Para ser capaz de encontrar um usuário cadastrado facilmente



Scenario: Caso não existam usuários cadastrados, deve existir uma opção para cadastrar um usuário.
    Given acessei a tela inicial do sistema
    When informo um nome para pesquisa que não existente na base
    Then visualizo uma mensagem de usuario inexistente 'Ops! Não existe nenhum usuário para ser exibido.'

Scenario: Todos as informações de usuários cadastrados devem ser fornecidas após a consulta
    Given acessei a tela inicial do sistema
    When informo um nome-email para pesquisa que não existente na base
    Then visualizo as informações do usuario buscado
  