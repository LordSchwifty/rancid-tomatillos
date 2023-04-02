describe('Single Movie View', () => {
    beforeEach(() => {
      cy.visit('https://lordschwifty.github.io/rancid-tomatillos');
      });
    it('Should confirm that true is equal to true', () => {
        expect(true).to.equal(true)
      });
    it('Should onclick show use more information about a movie', () => {
        cy.get('div[class="movie-container"]')
        .contains("Black Adam").click()
        .get('div[class="backdrop"]')
        .children().should('have.length', 1)
        .children().should('have.length', 7)
    })
    it('should take us back home after home button click', () => {
        cy.get('div[class="movie-container"]')
        .contains("Black Adam").click()
        .get('button').click()
        .get('h1')
    })
    
})