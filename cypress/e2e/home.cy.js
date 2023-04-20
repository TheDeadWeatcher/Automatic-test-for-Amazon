/// <reference types="cypress" />

describe("E2E - home page - Amazon", () => {
  before(function () {
    cy.fixture("pagesUrl").then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Should open home page and verify url", () => {
    cy.url().should("eq", url.homeUrl);
  });
});
