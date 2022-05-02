/// <reference types="cypress"/> 

describe('Login / Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('[id="signin_button"]').click()
    })

    it('should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')

        // use command - login
        cy.login('invalid username', 'invalid password')
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
            .and('contain', 'Login and/or password are wrong.')
    })

    it('should login to application', () => {
        cy.fixture("user").then( user => {
            const username = user.id
            const password = user.pswd

            cy.login(username, password)

            cy.get('a[data-toggle="dropdown"]').last().should('contain', username)
        })
    })

    it('should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('#signin_button').should('be.visible')
    })
})