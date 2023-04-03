/// <reference types="cypress"/>
import utils from '../support/utils'

describe('Functional Tests Barriga React', () => {
    let token;

    before(() => {
        cy.getToken('mateustcteste@gmail.com', '12345')
            .then(tkn => {
                token = tkn
            })
    })

    it('Create an account with success', () => {
        cy.request({
            headers: { Authorization: `JWT ${token}` },
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/contas',
            body: {
                nome: "Conta via rest"
            }
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
    })

    it('Edit an account with success', () => {

    })

    it('Create an account with same name', () => {

    })

    it('Create an transaction with success', () => {

    })

    it('Get balance with success', () => {

    })

    it('Remove transaction with success', () => {

    })

    after(() => {

        cy.request({
            headers: { Authorization: `JWT ${token}` },
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/reset',
        }).as('response')
    })
    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(200)
    })

})