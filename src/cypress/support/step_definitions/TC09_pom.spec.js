import Login from "../../integration/pageObjects/login";

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />
const login = new Login();

Given("I open Conduit application", () => {
  cy.visit("https://react-redux.realworld.io/#/login");
});

When("I enter credentials", () => {
  login.email().type("shimpy.kumari1@ibm.com");
  login.password().type("cypressdemo");
});

Then("I click on sign in button", () => {
  login.signInButton().should("be.visible").click();
});
