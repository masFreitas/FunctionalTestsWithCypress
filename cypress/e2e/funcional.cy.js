/// <reference types="cypress"/>
import loc from '../support/locators'
import utils from '../support/utils'
import '../support/contasCommands'

describe('Functional Tests Barriga React', () => {

    var accountName = utils.getRandomName()

    beforeEach(() => {
        cy.login('mateustcteste@gmail.com', '12345')
    })

    it('Create an account with success', () => {
        cy.accessAccountMenu()
        cy.createAccount(accountName)
        cy.get(loc.CONTAS.saveBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Conta inserida com sucesso!')
    })

    it('Edit an account with success', () => {
        cy.accessAccountMenu()
        cy.editAccountName(accountName)
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Conta atualizada com sucesso!')
    })

    it('Create an account with same name', () => {
        cy.accessAccountMenu()
        cy.createAccount('Conta alterada')
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Erro: Error: Request failed with status code 400')
    })

    after(() => {
        cy.resetApp()
    })

})