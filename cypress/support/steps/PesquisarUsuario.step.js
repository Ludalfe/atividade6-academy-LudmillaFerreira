import { listarUsuarios } from "../../support/pages/PesquisarUsuario.po"

//**Caso não existam usuários cadastrados, deve existir uma opção para cadastrar um usuário.**

Given("acessei a tela inicial do sistema", () => {
    listarUsuarios.visitar();
    listarUsuarios.acessarPaginaIncialDoSistema();
});

When("informo um nome para pesquisa que não existente na base", () => {

    listarUsuarios.informaNomeParaPesquisa("Nome não cadastrado");
});

Then("visualizo uma mensagem de usuario inexistente {string}", (mensagemErro) => {
    cy.contains("Cadastre um novo usuário");
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.");

});

//**Todos as informações de usuários cadastrados devem ser fornecidas após a consulta.**

When("informo um nome-email para pesquisa que não existente na base", () => {

    listarUsuarios.informaNomeParaPesquisa("ludz7@raro.com.br");
});

Then("visualizo as informações do usuario buscado", () => {
    cy.contains("Ver detalhes");
    //cy.contains("Cadastre um novo usuário");

});


