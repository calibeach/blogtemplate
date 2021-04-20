/* eslint-disable no-undef */
describe('Visits the homepage, tests the Read More link, checks to see if the fulltext and title exist on the page', function() {
    // eslint-disable-next-line jest/valid-title
    it('Visits the homepage and tests the Read More link, ', function () {
        cy.visit('/')
        // test to see if the "read more" link is there by clicking on the first link
        cy.get('.data').eq(1).invoke('show').get("link").eq(0)
        cy.contains('Read More').click({force: true})
        cy.get('.fullTitle')
        cy.get('.fullText')
    })
})