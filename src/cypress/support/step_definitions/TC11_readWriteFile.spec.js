import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />

Given("I write to a file", () => {
  cy.writeFile("sample.txt", "Hello World\n");
  cy.writeFile("sample.txt", "I am a test engineer!", { flag: "a+" });
});

Then("I read from a txt file", (content) => {
  cy.readFile("cypress/fixtures/sample.txt").should("contains", "Hello World");
});

Then("I read from a json file", (content) => {
  cy.readFile("cypress/fixtures/example.json")
    .its("name")
    .should("eq", "shimpy");
});
