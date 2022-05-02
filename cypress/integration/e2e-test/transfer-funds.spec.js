/// <reference types="cypress"/> 

describe('Transfer Funds Verefication test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Signin').click()
        cy.fixture("user").then( user => {
            const username = user.id
            const password = user.pswd
        cy.login(username, password)
        })
    })

    it('should fill transfer funds form', () => {
        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId').select('4')
        cy.get('#tf_toAccountId').select('3')
        cy.get('#tf_amount').type('55')
        cy.get('#tf_description').type('currency exchange')
        cy.get('button[id="btn_submit"]').click()
        
    })

    it('should show verify content data', () => {
        cy.get('#tf_fromAccountId').should('have.value', 'Loan')
        cy.get('#tf_toAccountId').should('have.value', 'Savings')
        cy.get('#tf_amount').should('have.value', '55')
        cy.get('#tf_description').should('have.value', 'currency exchange')
    })

})