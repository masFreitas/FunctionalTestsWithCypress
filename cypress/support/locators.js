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
        reset: '[href="/reset"]'
    },

    CONTAS: {
        nomeField: '[data-test="nome"]',
        saveBtn: '.btn',
        // editAccountButton: "//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']",
    }

}

export default locators;