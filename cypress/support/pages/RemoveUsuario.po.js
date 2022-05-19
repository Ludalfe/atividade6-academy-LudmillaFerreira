class removeUsuario {
    inputPesquisa = ".sc-gKXOVf";
    iconDeletar = ":nth-child(1) > .sc-dmRaPn > [data-test='userDataDelete'] > svg";
    confirmar = ".gBlXkK";
    visitar() {
        cy.visit("");
    }

    informaNomeParaPesquisa(nome) {
        cy.get(this.inputPesquisa).type(nome);
    }

    clicarEmDetalhes() {
        cy.get(this.iconDeletar).click();
    }

    clicarEmConfirmar() {
        cy.get(this.confirmar).click();
    }
    acessarPaginaIncialDoSistema() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

}

export var removeUsuarios = new removeUsuario();