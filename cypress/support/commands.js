const URL = "http://localhost:3000/";

Cypress.Commands.add("visitEvents", () => {
  cy.visit("http://localhost:9000/");
});

Cypress.Commands.add("visitEventsEmptyReponse", () => {
  cy.server();
  cy.route({
    method: "GET",
    url: "/events",
    response: [],
    status: 200,
  });
  cy.visit("http://localhost:9000/");
});

Cypress.Commands.add("visitEventsMockReponse", () => {
  cy.server();
  cy.route("GET", "/events", "fixture:eventRecord");
  cy.visit("http://localhost:9000/");
});

Cypress.Commands.add("visitEventsDelayMockReponse", () => {
  cy.server({
    delay: 1000,
  });
  cy.route("GET", "/events", "fixture:eventRecord");
  cy.visit("http://localhost:9000/");
});

Cypress.Commands.add("visitEventsErrorReponse", () => {
  cy.server();
  cy.route({
    method: "GET",
    url: "/events",
    response: [],
    status: 500,
  });
  cy.visit("http://localhost:9000/");
});
