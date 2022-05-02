/// <reference types="cypress"/>

describe('Create new payment', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Signin').click()
        cy.fixture("user").then( user => {
            const username = user.id
            const password = user.pswd

            cy.login(username, password)
        })
    })

    it('should send new test payment', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee')
        cy.get('#sp_payee').select('bofa')
        cy.get('#sp_account').select('3')
        cy.get('#sp_amount').type('1000')
        cy.get('#sp_date').type('2022-05-10 {enter}')
        cy.get('#sp_description').type('payment according to')
        cy.get('#pay_saved_payees').click()

    })

    it('should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The payment was successfully submitted.')
    })
})