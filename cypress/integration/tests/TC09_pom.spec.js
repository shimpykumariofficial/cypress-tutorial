import Login from "../pageObjects/login";

describe("Login", function () {
  const login = new Login();

  it("Sign in", function () {
    cy.visit("https://react-redux.realworld.io/#/login");
    login.email().type("shimpy.kumari1@ibm.com");
    login.password().type("cypressdemo");
    login.signInButton().should("be.visible").click();
  });
});
