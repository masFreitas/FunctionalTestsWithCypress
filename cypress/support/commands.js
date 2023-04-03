import loc from './locators'

Cypress.Commands.add('login', (user, password) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.emailField).type(user)
    cy.get(loc.LOGIN.passwordField).type(password)
    cy.get(loc.LOGIN.loginBtn).click()
    cy.get(loc.MESSAGE.toastMessage)
        .should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.setting).click()
    cy.get(loc.MENU.reset).click()
})

Cypress.Commands.add('getToken', (user, password) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: password
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        })
})

Cypress.Commands.add('resetRest', (token) => {
    cy.request({
        headers: { Authorization: `JWT ${token}` },
        method: 'GET',
        url: '/reset',
    }).its('status').should('be.equals', 200)
})