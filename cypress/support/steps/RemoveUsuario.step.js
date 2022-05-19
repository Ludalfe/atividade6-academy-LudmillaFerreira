
import { removeUsuarios } from "../../support/pages/RemoveUsuario.po"
import { criarUsuario } from "../../support/pages/CriarUsuario.po"

Given("cadastrei um usuario e acessei a tela de usuário", () => {
  
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome("Manelinho"); 
    criarUsuario.preencherEmail("manelinha@teste.com");
    criarUsuario.clicarEmSalvar();
    removeUsuarios.visitar();
    removeUsuarios.acessarPaginaIncialDoSistema();

});

When("Deleto o usuario cadastrado", () => {
    removeUsuarios.informaNomeParaPesquisa("manelinha@teste.com");
    removeUsuarios.clicarEmDetalhes();
    removeUsuarios.clicarEmConfirmar();
});

Then("visualizo a opção de cadastrar um novo usuario", () => {
    cy.contains(".sc-gicCDI", "Cadastre um novo usuário").should("be.visible");
    cy.contains(".deyBWI","Ops! Não existe nenhum usuário para ser exibido.").should("be.visible");

});