
class atualizarUsuario {
    inputNome = "#name";
    inputEditNome = "#userName";
    inputEditEmail = "#userEmail";
    inputEmail = "#email";
    btn = "#userDataDetalhe";
    inputPesquisar = ".sc-gKXOVf";
    btnEditar = '[type="button"] > .sc-iqcoie';
   
    
    visitar() {
        cy.visit("/");
        cy.get('.sc-dkzDqf').click();
        cy.wait(1000);

        
    }

    infomarNomePesquisa(pesquisa){
        cy.get(this.inputPesquisar).clear();
        cy.get(this.inputPesquisar).type(pesquisa);
    }

    clicarEmDetalhes(){
        cy.get(this.btn).click();
    }

    clicarEmEditar(){
        cy.get(this.btnEditar).click();
    }

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome);
    }


    editPreencherNome(nome) {
        cy.get(this.inputEditNome).clear();
        cy.get(this.inputEditNome).type(nome);
        
    }

    editPreencherEmail() {
        var numeroAleatorio = Math.random() * (1000 - 1);
        var email = "LudEditado" + numeroAleatorio + "@raroacademy.com.br";
        
        cy.get(this.inputEditEmail).clear();
        cy.get(this.inputEditEmail).type(email);
    }

    preencherEmail(email) {
        cy.get(this.inputEditEmail).type(email);
    }
 
    preencherEmailComNumeroAleatorioNoFinal() {
        var numeroAleatorio = Math.random() * (1000 - 1);
        var email = "LudTeste" + numeroAleatorio + "@raroacademy.com.br";
        cy.get(this.inputEmail).type(email);
      
    }

    clicarEmSalvar() {
        cy.wait(1000);
        cy.contains("button", "Salvar").click();
        
    }

    acessarPaginaDeCadastro() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users/novo");
        cy.wait(500);
    }

}

export var atualizarUsuarios = new atualizarUsuario();