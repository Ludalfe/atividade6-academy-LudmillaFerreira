Feature: Listar usuario
Como uma pessoa qualquer
Desejo consultar todos os usuários cadastrados
Para ter as informações de todos os usuários


Scenario: Caso não existam usuários cadastrados, deve existir uma opção para cadastrar um usuário.
    Given acessei a tela inicial do sistema
    When Não há nenhum usuário cadastrado
    Then visualizo a opção de cadastrar um novo usuario 'Cadastre um novo usuário'

Scenario: Todos as informações de usuários cadastrados devem ser fornecidas após a consulta.
    Given acessei a tela inicial do sistema usando o mock com varios cadastros
    When há ao menos um usuario cadastrado no sistema
    Then visualizo todas as informações dos usuarios cadastrados
    