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
        home: '[data-test="menu-home"]',
        setting: '[data-test="menu-settings"]',
        contas: '[href="/contas"]',
        reset: '[href="/reset"]',
        movimentacao: '[data-test="menu-movimentacao"]',
        extrato: '[data-test="menu-extrato"]'
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
        conta: '[data-test="conta"]',
        statusBtn: '[data-test="status"]',
        salvarBtn: '.btn-primary'
    },

    EXTRATO:{
        buscaElemento: (desc, value) => `//span[contains(., '${desc}')]//following-sibling::small[contains(., '${value}')]`,
        deleteExtrato: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
        editExtrato: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`,
    },

    SALDO: {
        FNsaldoConta: nome => `//td[contains(., '${nome}')]//following-sibling::td`
    }

}

export default locators;