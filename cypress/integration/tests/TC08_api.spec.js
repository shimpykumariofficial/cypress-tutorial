describe("API Testing", () => {
  Cypress.config("baseUrl", "https://reqres.in/");

  it("GET - read", () => {
    cy.request("api/users?page=2").then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
      expect(response.body.data).to.have.length(6);
    });
  });

  it("POST - create", () => {
    const item = {
      name: "morpheus",
      job: "leader",
    };
    cy.request("POST", "api/users", item)
      .its("body")
      .its("data")
      // .should('deep.eq', item)
      .should("include", { name: "morpheus" });
  });

  it("PUT - update", () => {
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
});
