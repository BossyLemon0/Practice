


describe('Go to home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Has start page', ()=>{
    const startWords = "start page"
    cy.get('[data-cy=StartPage]')
      .should('have.text', startWords)
  })
})