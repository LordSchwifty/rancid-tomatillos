describe('homepage', () => {
    beforeEach(() => {
     cy.visit('http://localhost:3000/')
    })
    it('should show title', () => {
     cy.contains('h1','Rancid Tomatillos')
    })
    it('should show all movies', () => {
     cy.get('div[class=movie-container]')
     .children().should('have.length', 40)
    })
    it('should be able to select a movie and navigate to info', () => {
     cy.get('div[class=poster]').contains('Black Adam')
     .click()
     .get('div[class=selected-movie-container]')
     .get('p')
     .contains('The world needed a hero. It got Black Adam.')
     .get('button').click()
     .get('div[class=movie-container]')
    })

  })