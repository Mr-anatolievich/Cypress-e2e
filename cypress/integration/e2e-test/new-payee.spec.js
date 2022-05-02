/// <reference types="cypress"/> 

describe('Create a new payee in a system', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Signin').click()
        cy.fixture("user").then( user => {
            const username = user.id
            const password = user.pswd

            cy.login(username, password)
        })
    })

    it('should add new payee to the system', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Bank of America')
        cy.get('#np_new_payee_address').type('2515 Main St, Union Gap, WA 98903')
        cy.get('#np_new_payee_account').type('4141414141414141')
        cy.get('#np_new_payee_details').type('Correspondent Bank acc 42578963154')
        cy.get('#add_new_payee').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The new payee Bank of America was successfully created.')
    })
})