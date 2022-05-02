/// <reference types="cypress"/> 


describe('Test Navigation Menu', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should display online bankink sectoin', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('should display feedback sectoin', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('form').should('be.visible')
    })

    it('should display homepage', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})