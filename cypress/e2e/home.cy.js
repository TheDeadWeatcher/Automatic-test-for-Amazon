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

  it('Should open home page and verify url', () => {
    cy.url().should('eq', url.homeUrl);
    cy.title().should('contain', 'Amazon.com');
  });

  it("logo should be visible and verify url", () => {
    cy.get('#nav-logo').should('be.visible');
    cy.get('#nav-logo').click();
    cy.url().should("contain", "ref=nav_logo");
    
  });

  it.only('deliver to button should be visible after click verify popup visible', ()=>{
    cy.get('#nav-global-location-slot').should('exist');
    cy.get('#nav-global-location-slot').click();
    cy.get('#a-popover-header-1').should("contain", "Choose your location");
    cy.get('[data-action="a-dropdown-button"]').click();
    cy.get('#GLUXCountryList_178').click();
    cy.get('[type="button"]').click();
    cy.get('#glow-ingress-line2').should('contain', 'Poland'); 
   
  })

  it('should display the search bar', () => {
    cy.get("#nav-search").should('exist');
    
  });

  it("should search for a valid product", () => {
    const searchTerm = "iphone"; 
    cy.get("#twotabsearchtextbox").type(searchTerm); 
    cy.get(".nav-search-submit .nav-input").click(); 
    cy.url().should("include", `k=${searchTerm}`);
    cy.get(".s-result-list").should("have.length.gte", 1); 
  });

  // this it will not working, amazon search engine showing defualt result when search phrase is wrong. 

  // it("should show no results for an invalid term", () => {
  //   const searchTerm = "audhsuadh";
  //   cy.get("#twotabsearchtextbox").type(searchTerm); 
  //   cy.get(".nav-search-submit .nav-input").click(); 
  //   cy.url().should("include", `k=${searchTerm}`); 
  //   cy.get("#noResultsTitle").should("be.visible"); 
  // });

  
});
