class listaDeUsuario {
    inputPesquisa = ".sc-gKXOVf"

    visitar() {
        cy.visit("");
    }

    informaNomeParaPesquisa(nome) {
        cy.get(this.inputPesquisa).type(nome);
    }
    acessarPaginaIncialDoSistema() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

}

export var listaDeUsuarios = new listaDeUsuario();