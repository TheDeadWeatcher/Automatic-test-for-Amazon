/// <reference types="cypress" />

describe('E2E - home page - Amazon', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('check all links from "Amazon Music" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    // cy.get('.hmenu-item').contains('Amazon Music').should('be.visible');
    cy.get('.hmenu-item').contains('Amazon Music').click();
    cy.get('[data-menu-id="2"] a', { timeout: 1000 }).should('be.visible');
    cy.get('[data-menu-id="2"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Kindle E-readers & Books" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    // cy.get('.hmenu-item')
    //   .contains('Kindle E-readers & Books')
    //   .should('be.visible');
    cy.get('.hmenu-item').contains('Kindle E-readers & Books').click();
    cy.get('[data-menu-id="3"] a', { timeout: 1000 }).should('be.visible');
    cy.get('[data-menu-id="3"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it.only('check all links from "Electronics" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    // cy.get('.hmenu-item').contains('Electronics').should('be.visible');
    cy.get('.hmenu-item').contains('Electronics').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 1000 })
      .invoke('show')
      .should('be.visible');
    cy.get('[data-menu-id="4"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
