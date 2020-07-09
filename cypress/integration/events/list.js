const SUCCESS = "You have added new event!";
context("Event list", () => {
  it("Empty list", () => {
    cy.visitEventsEmptyReponse();
    cy.get("p").contains("Currently there is no events available");
  });

  it("Not empty list", () => {
    cy.visitEventsMockReponse();
    cy.get(".MuiListItemText-primary").contains("Hello to Brainhub!");
    cy.get(".MuiListItemText-secondary").contains(
      "bartosz.golebiowski@brainhub.pl 11/19/2020"
    );
  });

  it("Loading", () => {
    cy.visitEventsDelayMockReponse();
    cy.get(".MuiCircularProgress-svg").should("be.visible");
    cy.wait(1000);
    cy.get(".MuiListItemText-primary").contains("Hello to Brainhub!");
    cy.get(".MuiListItemText-secondary").contains(
      "bartosz.golebiowski@brainhub.pl 11/19/2020"
    );
  });

  it("Error", () => {
    cy.visitEventsErrorReponse();
    cy.get("a").contains("Refresh");
  });
});
