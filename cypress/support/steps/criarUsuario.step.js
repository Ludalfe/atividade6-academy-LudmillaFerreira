import { criarUsuario } from "../../support/pages/CriarUsuario.po"



//**Não deve ser possível cadastrar um usuário com e-mail já utilizado no cadastro de outro usuário.**

Given("acessei a tela de cadastro", () => {
    criarUsuario.visitar;
});

When("informo os dados do usuario inexistente", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    console.log(dadosTabela);
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome(dadosTabela.nome); 
    criarUsuario.preencherEmail(dadosTabela.email);
    criarUsuario.clicarEmSalvar();
});

Then("visualizamos uma mensagem de erro {string}", (mensagemErro) => {

    cy.contains("Este e-mail já é utilizado por outro usuário.");

});

//**Realizar um cadastro com dados válidos.**

When("informo os dados do usuario com email e nome validos", () => {
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome("Joao Grilo");
    criarUsuario.preencherEmailComNumeroAleatorioNoFinal();
    criarUsuario.clicarEmSalvar();
});

Then("visualizamos a mensagem de sucesso {string}", (mensagemErro) => {

    cy.contains("Usuário salvo com sucesso!");

});



//**Não deve ser possível realizar um cadastro com e-mail em um formato inválido.**

When("informo os dados do usuario com um e-mail em um formato invalido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    console.log(dadosTabela);
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome(dadosTabela.nome);
    criarUsuario.preencherEmail(dadosTabela.email);
    criarUsuario.clicarEmSalvar();
});

Then("visualizamos uma mensagem de erro relacionado ao formato de email informado {string}", (mensagemErro) => {

    cy.contains("Formato de e-mail inválido");

});

//**Não deve ser possível cadastrar um nome com mais de 100 caracteres.**

When("informo os dados do usuario com o nome com mais de 100 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    console.log(dadosTabela);
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome(dadosTabela.nome);
    criarUsuario.preencherEmail(dadosTabela.email);
    criarUsuario.clicarEmSalvar();
});

Then("visualizamos uma mensagem de erro relacionado ao tamanho do nome informado {string}", (mensagemErro) => {

    cy.contains("Informe no máximo 100 caracteres para o nome");

});

//**Não deve ser possível cadastrar um email com mais de 60 caracteres.**

When("informo os dados do usuario com o email com mais de 60 caracteres", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    console.log(dadosTabela);
    criarUsuario.acessarPaginaDeCadastro();
    criarUsuario.preencherNome(dadosTabela.nome);
    criarUsuario.preencherEmail(dadosTabela.email);
    criarUsuario.clicarEmSalvar();
});

Then("visualizamos uma mensagem de erro relacionado ao tamanho do email informado {string}", (mensagemErro) => {

    cy.contains("Informe no máximo 60 caracteres para o e-mail");

});