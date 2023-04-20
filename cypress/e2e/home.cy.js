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

  it("should search for a valid product", () => {
    const searchTerm = "iphone"; 
    cy.get("#twotabsearchtextbox").type(searchTerm); 
    cy.get(".nav-search-submit .nav-input").click(); 
    cy.url().should("include", `k=${searchTerm}`);
    cy.get(".s-result-list").should("have.length.gte", 1); 
  });

  it.only("should show no results for an invalid term", () => {
    const searchTerm = "audhsuadh";
    cy.get("#twotabsearchtextbox").type(searchTerm); 
    cy.get(".nav-search-submit .nav-input").click(); 
    cy.url().should("include", `k=${searchTerm}`); 
    cy.get("#noResultsTitle").should("be.visible"); 
  });

  
});
