/// <reference types="cypress"/>

describe("", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("tryToType", function () {
    cy.get('[name="name"]').type("Angelique").should("have.value", "Angelique");
  });

  it("should allow me to select toppings", function () {
    cy.get('input[name="pepperoni"]').check().should("be.checked");
    cy.get('input[name="chedder"]').check().should("be.checked");
    cy.get('input[name="redsauce"]').check().should("be.checked");
    cy.get('input[name="garlic"]').check().should("be.checked");
    cy.get('input[name="bbq"]').check().should("be.checked");
    cy.get('input[name="spinach"]').check().should("be.checked");
  });

  it("should submit form", function () {
    cy.get('[name="name"]').type("Angelique");
    cy.get('input[name="pepperoni"]').check().should("be.checked");
    cy.get('input[name="chedder"]').check().should("be.checked");
    cy.get('input[name="redsauce"]').check().should("be.checked");
    cy.get('input[name="garlic"]').check().should("be.checked");
    cy.get('input[name="bbq"]').check().should("be.checked");
    cy.get('input[name="spinach"]').check().should("be.checked");
    cy.get('[data-test-id="submitButton"]').click();
  });
});
