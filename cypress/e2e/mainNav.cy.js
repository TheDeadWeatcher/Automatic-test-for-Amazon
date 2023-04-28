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
    cy.get('.hmenu-item').contains('Amazon Music').should('be.visible');
    cy.get('.hmenu-item').contains('Amazon Music').click();
    cy.get('[data-menu-id="2"] a', { timeout: 100 }).should('be.visible');
    cy.get('[data-menu-id="2"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Kindle E-readers & Books" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('Kindle E-readers & Books').should('be.visible');
    cy.get('.hmenu-item').contains('Kindle E-readers & Books').click();
    cy.get('[data-menu-id="3"] a', { timeout: 100 }).should('be.visible');
    cy.get('[data-menu-id="3"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Amazon Appstore" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('Amazon Appstore').should('be.visible');
    cy.get('.hmenu-item').contains('Amazon Appstore').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="4"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Electronics" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('Electronics').should('be.visible');
    cy.get('.hmenu-item').contains('Electronics').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="5"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Computers" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('Computers').should('be.visible');
    cy.get('.hmenu-item').contains('Computers').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="6"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Smart Home" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('see all').click();
    cy.get('.hmenu-item').contains('Smart Home').should('be.visible');
    cy.get('.hmenu-item').contains('Smart Home').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="7"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Arts & Crafts" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('Arts & Crafts').should('be.visible');
    cy.get('.hmenu-item').contains('Arts & Crafts').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="8"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Automotive" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('see all').click();
    cy.get('.hmenu-item').contains('Automotive').should('be.visible');
    cy.get('.hmenu-item').contains('Automotive').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="9"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Baby" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('see all').click();
    cy.get('.hmenu-item').contains('Baby').should('be.visible');
    cy.get('.hmenu-item').contains('Baby').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="10"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Beauty And Personal Care" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('see all').click();
    cy.get('.hmenu-item').contains('Beauty and personal care').should('be.visible');
    cy.get('.hmenu-item').contains('Beauty and personal care').click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="11"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('check all links from "Womens Fashion" main nav category', () => {
    cy.get('#nav-hamburger-menu').click();
    cy.get('.hmenu-item').contains('see all').click();
    cy.get('.hmenu-item').contains("Women's Fashion").should('be.visible');
    cy.get('.hmenu-item').contains("Women's Fashion").click();
    cy.get('#hmenu-content > .hmenu-visible a', { timeout: 100 }).invoke('show').should('be.visible');
    cy.get('[data-menu-id="12"] a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  // it.only('should navigate to each link on the main navigation bar', () => {
  //   cy.get('#nav-hamburger-menu').click();
  //   // Get all links in the main navigation bar
  //   cy.get('a.hmenu-item').each(($link) => {
  //     // Click on each link and verify that the page loads
  //     cy.wrap($link).invoke('show').click();
  //     cy.url().should('include', $link.attr('href'));
  //   });
  // });

  // it.only('should navigate to each link on the main navigation bar', () => {
  //   cy.get('#nav-hamburger-menu').click();
  //   cy.get('a.hmenu-item').should('be.visible');
  //   cy.get('a.hmenu-item').each(($el, index, $list) => {
  //     const linkText = $el.text().trim();
  //     const linkHref = $el.attr('href');

  //     cy.wrap($el).click({ force: true });

  //     cy.url().should('include', linkHref);
  //     cy.get('a.hmenu-item').invoke('show');
  //     cy.get('a.hmenu-item').as('btn').click({ force: true });

  //     cy.get('@btn').eq(index).should('have.class', 'hmenu-item').should('have.text', linkText);

  //     cy.go('back');
  //   });
  // });
});
