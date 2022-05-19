Feature: Atualizar Usuario
Como uma pessoa qualquer
Desejo atualizar as informações de determinado usuário
Para ter o registro de suas informações atualizadas



Scenario: O usuário deve ser localizado através de seu identificador único..
    Given cadastrei um usuario e acessei a tela de atualização
    When Atualizar o cadastro de um usuario
    Then visualizo a opção de cadastrar um novo usuario
