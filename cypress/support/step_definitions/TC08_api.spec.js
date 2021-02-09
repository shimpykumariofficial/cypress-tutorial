import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />

Given("I set the baseUrl", () => {
  Cypress.config("baseUrl", "https://reqres.in/");
});

When("I make GET request", () => {
  cy.request("api/users?page=2").then((response) => {
    expect(response).to.have.property("status", 200);
    expect(response.body).to.not.be.null;
    expect(response.body.data).to.have.length(6);
  });
});

And("I make POST request", () => {
  const item = {
    name: "morpheus",
    job: "leader",
  };
  cy.request("POST", "api/users", item)
    .its("body")
    .should("include", { name: "morpheus" });
});

Then("I make PUT request", () => {
  const item = { job: "unemployed" };
  cy.request({
    method: "PUT",
    url: "api/users/2",
    body: item,
    failOnStatusCode: false,
  })
    .its("status")
    .should("eq", 200);
});
