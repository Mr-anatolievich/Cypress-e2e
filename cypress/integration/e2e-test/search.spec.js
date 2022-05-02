/// <reference types="cypress"/> 

describe('Searchbox Test', () => {
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should type into searchform and pressing enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    })
    it('should show results page', () => {
        cy.get('h2').contains('Search Results:')
    })

    
})