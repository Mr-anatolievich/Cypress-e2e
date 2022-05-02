/// <reference types="cypress"/> 

describe('Feedback Form Test', () => {
    before( () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should load feedback form', () => {
        cy.contains('Feedback').click()
        cy.get('#feedback-title').should('be.visible')
    })

    it('should fill feedback form', () => {
        cy.get('input[id="name"]').type('Yaroslav')
        cy.get('input[id="email"]').type('test@test.com')
        cy.get('input[id="subject"]').type('Froud')
        cy.get('textarea[id="comment"]').type('In this place should be our text')
    })

    it('should submit feedback form', () => {
        cy.get('input[name="submit"]').click()
    })

    it('should display feedback message', () => {
        cy.get('body').contains('Thank you for your comments')
    })
})