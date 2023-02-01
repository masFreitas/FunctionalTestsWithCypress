/// <reference types="cypress"/>

describe('Functional Tests Barriga React', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')

        cy.get('[data-test="email"]').type('mateustcteste@gmail.com')
        cy.get('[data-test="passwd"]').type('12345')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('contain', 'Bem vindo')
    })

    it('Create an account with success', () => {
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta de teste')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('contain', 'Conta inserida com sucesso!')
    })

    it('Edit an account with success', () => {
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
        cy.xpath("//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']")
            .click()
        cy.get('[data-test="nome"]')
            .clear()
            .type('Conta alterada')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('contain', 'Conta atualizada com sucesso!')
    })
})