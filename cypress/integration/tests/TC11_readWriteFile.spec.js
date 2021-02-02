describe("Read-Write files content", function () {
  it("Write to a file", function () {
    cy.writeFile("sample.txt", "Hello World\n");
    cy.writeFile("sample.txt", "I am a test engineer!", { flag: "a+" });
  });

  it("Read from a file", function () {
    cy.readFile("sample").should("contains", "Hello World");
  });
});
