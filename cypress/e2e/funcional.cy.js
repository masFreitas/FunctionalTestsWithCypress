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

    it('Create an transaction with success', () => {
        cy.get(loc.MENU.movimentacao).click()
        cy.get(loc.MOVIMENTACAO.descricaoField).type('Desc')
        cy.get(loc.MOVIMENTACAO.valorField).type('123')
        cy.get(loc.MOVIMENTACAO.interessadoField).type('Inter')
        cy.get(loc.MOVIMENTACAO.conta).select('Conta alterada')
        cy.get(loc.MOVIMENTACAO.statusBtn).click()
        cy.get(loc.MOVIMENTACAO.salvarBtn).click()
        cy.get(loc.MESSAGE.toastMessage)
            .should('contain', 'Movimentação inserida com sucesso!')
        cy.xpath(loc.EXTRATO.buscaElemento('Desc', '123')).should('exist')
    })

    it('Get balance with success', () => {
        cy.get(loc.MENU.home).click()
        cy.xpath(loc.SALDO.FNsaldoConta('Conta alterada')).should('contain', '123,00')
        
    })

    after(() => {
        cy.resetApp()
    })

})