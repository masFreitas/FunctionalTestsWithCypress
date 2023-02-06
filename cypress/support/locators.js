const locators = {
    LOGIN: {
        emailField: '[data-test="email"]',
        passwordField:  '[data-test="passwd"]',
        loginBtn: '.btn',
    },

    MESSAGE: {
        toastMessage: '.toast-message',
    },

    MENU: {
        setting: '[data-test="menu-settings"]',
        contas: '[href="/contas"]',
        reset: '[href="/reset"]',
        movimentacao: '[data-test="menu-movimentacao"]',
    },

    CONTAS: {
        nomeField: '[data-test="nome"]',
        saveBtn: '.btn',
        // editAccountButton: "//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']",
    },

    MOVIMENTACAO: {
        descricaoField: '[data-test="descricao"]',
        valorField: '[data-test="valor"]',
        interessadoField: '[data-test="envolvido"]',
        statusBtn: '[data-test="status"]',
        salvarBtn: '.btn-primary'
    },

    EXTRATO:{
        buscaElemento: "//span[contains(., 'Desc')]//following-sibling::small[contains(., '123')]"
    }

}

export default locators;