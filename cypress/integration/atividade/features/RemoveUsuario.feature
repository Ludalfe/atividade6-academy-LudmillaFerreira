Feature: Remover um usuario
Como uma pessoa qualquer
Desejo remover um usuário
Para que suas informações não estejam mais registradas


Scenario: O usuário a ser removido deve ser localizado através de seu identificador único.
    Given cadastrei um usuario e acessei a tela de usuário
    When Deleto o usuario cadastrado
    Then visualizo a opção de cadastrar um novo usuario