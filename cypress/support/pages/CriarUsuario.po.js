class criaUsuario {
    inputNome = "#name";
    inputEmail = "#email";
    
    visitar() {
        cy.visit("");
        
    }

    preencherNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    preencherEmailComNumeroAleatorioNoFinal() {
        var numeroAleatorio = Math.random() * (10000 - 1);
        var email = "LudTeste" + numeroAleatorio + "@raroacademy.com.br";
        cy.get(this.inputEmail).type(email);
    }

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
        cy.wait(1000);
    }

    acessarPaginaDeCadastro() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users/novo");
        cy.wait(1000);
    }

}

export var criarUsuario = new criaUsuario();