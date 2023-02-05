/// <reference types="cypress"/>
import loc from '../support/locators'

describe('Functional Tests Barriga React', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')

        cy.get(loc.LOGIN.emailField).type('mateustcteste@gmail.com')
        cy.get(loc.LOGIN.passwordField).type('12345')
        cy.get(loc.LOGIN.loginBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Bem vindo')
    })

    it('Create an account with success', () => {
        cy.get(loc.MENU.setting).click()
        cy.get(loc.MENU.contas).click()
        cy.get(loc.CONTAS.nomeField).type('Conta de teste')
        cy.get(loc.CONTAS.saveBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Conta inserida com sucesso!')
    })

    it('Edit an account with success', () => {
        cy.get(loc.MENU.setting).click()
        cy.get(loc.MENU.contas).click()
        cy.xpath(loc.CONTAS.editAccountButton)
            .click()
        cy.get(loc.CONTAS.nomeField)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.saveBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Conta atualizada com sucesso!')
    })

})