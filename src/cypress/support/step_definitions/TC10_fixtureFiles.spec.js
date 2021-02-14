import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />

before(function () {
  cy.fixture("credentials").as("user");
});

Given("I open Conduit login page", () => {
  cy.visit("https://react-redux.realworld.io/#/login");
});

When("I enter credentials", () => {
  cy.get('input[type="email"]').type(this.user.email);
  cy.get('input[type="password"]').type(this.user.password);
});

Then("I click on sign in button", (content) => {
  cy.get(".btn").contains("Sign in").should("be.visible").click();
});
