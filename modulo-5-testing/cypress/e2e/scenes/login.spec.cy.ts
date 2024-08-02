describe('scenes', () => {
  it('should pass to the next page', () => {
    cy.visit("http://localhost:8080");
    cy.get('input[name="user"]').type("admin");
    cy.get('input[name="password"]').type("test")
    cy.get('button').click();
  });
});
