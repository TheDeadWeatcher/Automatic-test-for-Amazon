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

  // it('Should type phrase and verify title', () => {
    
  // });

  it("should search for a valid product", () => {
    const searchTerm = "iphone"; // define the search term
    cy.get("#twotabsearchtextbox").type(searchTerm); // find the search input and type in the search term
    cy.get(".nav-search-submit .nav-input").click(); // click the search button
    cy.url().should("include", `k=${searchTerm}`); // check that the URL contains the search term
    cy.get(".s-result-list").should("have.length.gte", 1); // check that there is at least one search result
  });

  it("should show no results for an invalid term", () => {
    const searchTerm = "qwertyuiop";
    cy.get("#twotabsearchtextbox").type(searchTerm); // find the search input and type in the search term
    cy.get(".nav-search-submit .nav-input").click(); // click the search button
    cy.url().should("include", `k=${searchTerm}`); // check that the URL contains the search term
    cy.get("#noResultsTitle").should("be.visible"); // check that the "no results" message is displayed
  });
});
