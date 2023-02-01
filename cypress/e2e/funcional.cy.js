/// <reference types="cypress"/>

describe('Functional Tests Barriga React', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
    })

    it('Do Login', () => {
        cy.get('[data-test="email"]').type('mateustcteste@gmail.com')
        cy.get('[data-test="passwd"]').type('12345')
        cy.get('.btn').click()
        cy.get('.toast-message')
            .should('have.text', 'Bem vindo')
    })
})