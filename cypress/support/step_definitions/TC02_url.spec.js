import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />

Given("I open Conduit login page", () => {
  cy.visit("/login");
});

When("I pass credentials", () => {
  cy.get('input[type="email"]').type(Cypress.env("username"));
  cy.get('input[type="password"]').type(Cypress.env("password"));
});

And("I click on Sign in button", () => {
  cy.get(".btn").contains("Sign in").should("be.visible").click();
});

And("I create a new post", () => {
  cy.contains("New Post").click();
  cy.hash().should("include", "#/editor");
  //cy.location('hash').should('include','#/editor')
  cy.get('input[placeholder="Article Title"]').type("Test");
  cy.get('input[placeholder="What\'s this article about?"]').type("Test 1");
  cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
    "Test 2"
  );
  cy.contains("Publish Article").click();
  cy.url().should("include", "article");
});

And("I mark post as favorite", () => {
  cy.get(".nav-link").contains("shimpy_kumari").click();
  cy.contains("My Articles").should("be.visible");
  cy.get(":nth-child(1) > .article-meta > .pull-xs-right > .btn").click();
  cy.contains("Favorited Articles").click();
  cy.url().should("include", "favorites");
});

Then("I unmark and verify", () => {
  cy.get(":nth-child(1) > .article-meta > .pull-xs-right > .btn").click();
  cy.reload();
  // cy.contains("No articles are here... yet.").should("be.visible");
  cy.go("back");
});
