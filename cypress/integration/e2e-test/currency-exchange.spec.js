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

    it('should fill consersation form', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type('100')
        cy.get('#pc_inDollars_true').check()
        cy.get('#pc_calculate_costs').click()
        

    })

    it('should display conversation ammount', () => {
        cy.get('#pc_conversion_amount').should('contain', '59.02 pound (GBP) = 100.00 U.S. dollar (USD)')
    })
})