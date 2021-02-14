import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />

const fileName = "sample.pdf";

Given("I open upload file page", () => {
  cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html");
});

When("I submit a pdf file", () => {
  cy.get('[type="file"]').attachFile(fileName);
  cy.get('[type="submit"]').click();
});

Then("Verify file is uploaded", () => {
  cy.contains("You've uploaded a file. Your notes on the file were:");
});
