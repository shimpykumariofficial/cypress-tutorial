import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pageobjects/HomePage";
import LandingPage from "../pageobjects/LandingPage";
import GeneralInfo from "../pageobjects/GeneralInfo";

const landingPage = new LandingPage();
const homePage = new HomePage();
const generalInfo = new GeneralInfo();

Given("I open Conduit login page", () => {
  cy.visit("https://react-redux.realworld.io/#/login");
});

When("I pass credentials", () => {
  cy.get('input[type="email"]').type(Cypress.env(username));
  cy.get('input[type="password"]').type(Cypress.env(password));
});

And("I click on Sign in button", () => {
  cy.get(".btn").contains("Sign in").should("be.visible").click();
});

Then("{string} should be shown", (content) => {
  cy.contains(content, { timeout: 10000 }).should("be.visible");
});
