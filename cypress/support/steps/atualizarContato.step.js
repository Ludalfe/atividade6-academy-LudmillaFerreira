import { atualizarUsuarios } from "../../support/pages/atualizarContatos.po"
import { criarUsuario } from "../../support/pages/CriarUsuario.po"
import { removeUsuarios } from "../../support/pages/RemoveUsuario.po"


Given("cadastrei um usuario e acessei a tela de atualização", () => {
  
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome("Nome antes da edicao"); 
    criarUsuario.preencherEmail("antesDaAtualizacaox@gmail.com");
    criarUsuario.clicarEmSalvar();
    atualizarUsuarios.visitar();
});

When("Atualizar o cadastro de um usuario", () => {
    atualizarUsuarios.infomarNomePesquisa("antesDaAtualizacaox@gmail.com");
    cy.wait(1000);
    atualizarUsuarios.clicarEmDetalhes();
    cy.wait(1000);
    atualizarUsuarios.clicarEmEditar();
    cy.wait(1000);
    atualizarUsuarios.editPreencherNome("NomeDepoisDaEdicao");
    cy.wait(1000);
    atualizarUsuarios.editPreencherEmail();
    cy.wait(1000);
    atualizarUsuarios.clicarEmSalvar();
    cy.wait(1000);
    atualizarUsuarios.visitar();
    cy.wait(1000);
    atualizarUsuarios.infomarNomePesquisa("antesDaAtualizacaox@gmail.com");
    cy.wait(1000);

   
});

Then("visualizo a opção de cadastrar um novo usuario", () => {
    cy.contains(".sc-gicCDI", "Cadastre um novo usuário").should("be.visible");
    cy.contains(".deyBWI","Ops! Não existe nenhum usuário para ser exibido.").should("be.visible");

});





