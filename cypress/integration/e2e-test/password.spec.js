/// <reference types="cypress"/> 

describe('Forgot Password', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should click on a signIn button', () => {
        cy.get('[id="signin_button"]').click()
    })
    it('should find forgot password button', () => {
        cy.get('.offset3 > a').click()
    })

    it('write email and send it', () => {
        cy.get('[id="user_email"]').type('test@test.com')
    })

    it('should check if will be sent to current email ', () => {
        cy.contains('Send Password').click()
    })
})