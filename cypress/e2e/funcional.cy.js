/// <reference types="cypress"/>
import loc from '../support/locators'
import utils from '../support/utils'

describe('Functional Tests Barriga React', () => {

    var accountName = utils.getRandomName()

    beforeEach(() => {
        cy.login('mateustcteste@gmail.com', '12345')
    })

    it('Create an account with success', () => {
        cy.get(loc.MENU.setting).click()
        cy.get(loc.MENU.contas).click()
        cy.get(loc.CONTAS.nomeField).type(accountName)
        cy.get(loc.CONTAS.saveBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Conta inserida com sucesso!')
    })

    it('Edit an account with success', () => {
        cy.get(loc.MENU.setting).click()
        cy.get(loc.MENU.contas).click()
        cy.xpath('//table//td[contains(.,\''+accountName+'\')]/..//i[@class=\'far fa-edit\']')
            .click()
        cy.get(loc.CONTAS.nomeField)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.saveBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Conta atualizada com sucesso!')
        cy.resetApp()
    })

})