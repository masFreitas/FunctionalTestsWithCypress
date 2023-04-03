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

    beforeEach(() => {
        cy.resetRest(token)
    })

    it('Create an account with success', () => {
        cy.request({
            headers: { Authorization: `JWT ${token}` },
            method: 'POST',
            url: '/contas',
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

    it.only('Edit an account with success', () => {
        cy.request({
            headers: { Authorization: `JWT ${token}` },
            method: 'GET',
            url: '/contas',
            qs: {
                npme: 'Conta para alterar'
            }
        }).then(res => {
            cy.request({
                headers: { Authorization: `JWT ${token}` },
                method: 'PUT',
                url: `/contas/${res.body[0].id}`,
                body: {
                    nome: 'Conta alterada via rest'
                }
            }).as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.have.property('nome', 'Conta alterada via rest')
            })
        })

    })

    it('Create an account with same name', () => {

    })

    it('Create an transaction with success', () => {

    })

    it('Get balance with success', () => {

    })

    it('Remove transaction with success', () => {

    })
})