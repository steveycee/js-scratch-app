/// <reference types="cypress" />

context("Faffin about init", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/app/index.html");
  });

  it("Demo should change colour when I click on demo.", () => {
    cy.get(".demo").should("have.css", "color", "rgb(0, 0, 0)");
    cy.get(".demo")
      .click()
      .should("have.css", "color", "rgb(0, 0, 255)")
      .contains("Blue now lol");
  });

  it("Demo should change back when its clicked again.", () => {
    cy.get(".demo").should("have.css", "color", "rgb(0, 0, 255)");
    cy.get(".demo")
      .click()
      .should("have.css", "color", "rgb(0, 0, 0)")
      .contains("Click me");
  });
});
