describe('Seleccionar', () => {
  it('Seleccionar auto', () => {
    cy.visit('http://localhost:4200');
    /* cy.get('#selectCar').select('Volvo'); */
    cy.get('#selectCar').click().get('.ng-option').contains('Volvo').click();
  });
});
