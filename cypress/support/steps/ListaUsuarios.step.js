import { listaDeUsuarios } from "../../support/pages/ListarUsuario.po"



Given("acessei a tela inicial do sistema", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", []);

    listaDeUsuarios.visitar();
    listaDeUsuarios.acessarPaginaIncialDoSistema();

});

When("Não há nenhum usuário cadastrado", () => {

});

Then("visualizo a opção de cadastrar um novo usuario {string}", (mensagemErro) => {
    cy.contains(".sc-gicCDI", "Cadastre um novo usuário").should("be.visible");
    cy.contains("Ops! Não existe nenhum usuário para ser exibido.");

});



When("informo um nome-email para pesquisa que não existente na base", () => {

    listaDeUsuarios.informaNomeParaPesquisa("ludz7@raro.com.br");
});

Then("visualizo as informações do usuario buscado", () => {
    cy.contains("Ver detalhes");


});


Given("acessei a tela inicial do sistema usando o mock com varios cadastros", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", [{ "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "c2cb39c2-0817-4766-b4b3-c0447bc80e9f", "name": "Lara", "email": "1652384067864@gmail.com", "createdAt": "2022-05-12T19:34:28.762Z", "updatedAt": "2022-05-12T19:34:28.762Z" }, { "id": "75e4801a-d94a-4b94-b32b-d586603180e7", "name": "Vera", "email": "1652384071282thereason@gmail.com", "createdAt": "2022-05-12T19:34:32.098Z", "updatedAt": "2022-05-12T19:34:32.098Z" }, { "id": "56b9632d-9d36-4bfc-97b1-9a3351e7444b", "name": "Joao", "email": "1652384075858@gmail.com", "createdAt": "2022-05-12T19:34:37.028Z", "updatedAt": "2022-05-12T19:34:37.028Z" }, { "id": "f78c8f2f-9267-45a9-a1d4-0c82859fe124", "name": "Viviane", "email": "1652384081187@gmail.com", "createdAt": "2022-05-12T19:34:41.898Z", "updatedAt": "2022-05-12T19:34:41.898Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }, { "id": "18d132f6-1166-4570-948a-269a2df45d40", "name": "ludz", "email": "luz@gmail.com", "createdAt": "2022-05-11T15:27:31.340Z", "updatedAt": "2022-05-12T19:36:36.269Z" }]);

    listaDeUsuarios.visitar();
    listaDeUsuarios.acessarPaginaIncialDoSistema();

});

When("há ao menos um usuario cadastrado no sistema", () => {

});

Then("visualizo todas as informações dos usuarios cadastrados", () => {
    cy.contains(".sc-hHLeRK", "ludz").should("be.visible");
    cy.contains("#userDataDetalhe", "Ver detalhes").should("be.visible");

});



