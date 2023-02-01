/// <reference types="cypress"/>

describe('Functional Tests Barriga React', () => {
    before(() => {
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
})