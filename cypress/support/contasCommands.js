import loc from './locators'

Cypress.Commands.add('accessAccountMenu', () => {
    cy.get(loc.MENU.setting).click()
    cy.get(loc.MENU.contas).click()
})

Cypress.Commands.add('createAccount', (account) => {
    cy.get(loc.CONTAS.nomeField).type(account)
    cy.get(loc.CONTAS.saveBtn).click()
})

Cypress.Commands.add('editAccountName', (accountName) => {
    cy.xpath('//table//td[contains(.,\'' + accountName + '\')]/..//i[@class=\'far fa-edit\']')
        .click()
    cy.get(loc.CONTAS.nomeField)
        .clear()
        .type('Conta alterada')
    cy.get(loc.CONTAS.saveBtn).click()
})