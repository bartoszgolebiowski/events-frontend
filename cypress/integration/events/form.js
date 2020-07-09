const SUCCESS = "You have added new event!";
context("Event form", () => {
  beforeEach(() => {
    cy.visitEvents();
  });

  it("Correct form", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Wick");
    cy.get('input[name="email"]').type("John.Wick@example.com");
    cy.get('input[name="date"]').type("2020-12-31");
    cy.get("[data-cy=event-submit]").click();
    cy.get('input[name="firstName"]').should("be.empty");
    cy.get('input[name="lastName"]').should("be.empty");
    cy.get('input[name="email"]').should("be.empty");
    cy.get('input[name="date"]').should("be.empty");
    cy.get("[data-cy=event-0] > .MuiListItemText-primary").contains(
      "John Wick"
    );
    cy.get(".MuiSnackbar-root > .MuiPaper-root").should(
      "have.class",
      "MuiAlert-filledSuccess"
    );
  });

  it("Wrong form", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Wick");
    cy.get('input[name="date"]').type("2020-12-31");
    cy.get("[data-cy=event-submit]").click();
    cy.get("[data-cy=event-0] > .MuiListItemText-primary").should(
      "not.be.equal",
      "John Wick"
    );
  });

  it("Wrong email pattern form", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Wick");
    cy.get('input[name="email"]').type("John.Wick@example.com123");
    cy.get('input[name="date"]').type("2020-12-31");
    cy.get("[data-cy=event-submit]").click();
    cy.get('input[name="firstName"]').should("be.empty");
    cy.get('input[name="lastName"]').should("be.empty");
    cy.get('input[name="email"]').should("be.empty");
    cy.get('input[name="date"]').should("be.empty");
    cy.get("[data-cy=event-0] > .MuiListItemText-primary").should(
      "not.be.equal",
      "John Wick"
    );
    cy.get(".MuiAlert-message").contains("Email is not fitting formula");
    cy.get(".MuiSnackbar-root > .MuiPaper-root").should(
      "have.class",
      "MuiAlert-filledError"
    );
  });

  it("Check reset button", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Wick");
    cy.get('input[name="email"]').type("John.Wick@example.com");
    cy.get('input[name="date"]').type("2020-12-31");
    cy.get("[data-cy=event-reset]").click();
    cy.get('input[name="firstName"]').should("be.empty");
    cy.get('input[name="lastName"]').should("be.empty");
    cy.get('input[name="email"]').should("be.empty");
    cy.get('input[name="date"]').should("be.empty");
  });
});
