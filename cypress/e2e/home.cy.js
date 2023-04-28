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

  it('Should open home page and verify url', () => {
    cy.url().should('eq', url.homeUrl);
    cy.title().should('contain', 'Amazon.com');
  });

  it('logo should be visible and verify url', () => {
    cy.get('#nav-logo').should('be.visible');
    cy.get('#nav-logo').click();
    cy.url().should('contain', 'ref=nav_logo');
  });

  it('deliver to button should be visible after click verify popup visible', () => {
    cy.get('#nav-global-location-slot').should('exist');
    cy.get('#nav-global-location-slot').click();
    cy.get('#a-popover-header-1').should('contain', 'Choose your location');
    cy.get('[data-action="a-dropdown-button"]').should('exist');
    cy.get('[data-action="a-dropdown-button"]').click();
    cy.get('#GLUXCountryList_178').should('exist');
    cy.get('#GLUXCountryList_178').click();
    cy.get('[type="button"]').click();
    cy.get('#glow-ingress-line2').should('contain', 'Poland');
  });

  it('should search for a valid product', () => {
    const searchTerm = 'iphone';
    cy.get('#nav-search').should('exist');
    cy.get('#twotabsearchtextbox').type(searchTerm);
    cy.get('.nav-search-submit .nav-input').click();
    cy.url().should('include', `k=${searchTerm}`);
    cy.get('.s-result-list').should('have.length.gte', 1);
  });

  // "search invalid porduct" -  amazon search engine showing defualt result when search phrase is invalid or without seens.

  it('should be visible "change language" button also verify url', () => {
    cy.get('#icp-nav-flyout').should('be.visible');
    cy.get('#icp-nav-flyout').click();
    cy.url().should('contain', 'topnav_lang_ais');
  });

  it('check all links on account&list', () => {
    cy.get('[data-nav-ref="nav_ya_signin"]').should('exist');
    cy.get('[data-nav-ref="nav_ya_signin"]').click();
    cy.url().should('contain', 'Fauth%2F2.0&');
    cy.go('back');
    cy.get('#nav-link-accountList').trigger('mouseover');
    cy.get('#nav-al-container a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('should be visible "Returns&Orders, Cart" button also verify url', () => {
    cy.get('#nav-orders').should('be.visible');
    cy.get('#nav-orders').click();
    cy.url().should('contain', 'ap/signin?');
    cy.go('back');
    cy.get('#nav-cart-count').should('be.visible');
    cy.get('#nav-cart-count').click();
    cy.url().should('contain', 'nav_cart');
  });

  it('should be visible all links from nav "x shop" and "great deals" also verify url', () => {
    cy.get('#nav-xshop a').each((page) => {
      cy.request(page.prop('href')).should((response) => {
        expect(response.status).to.eq(200);
      });
    });
    cy.get('#nav-swmslot').should('be.visible');
    cy.get('#nav-swmslot').click();
    cy.url().should('contain', 'deals');
  });

  it.only('should navigate to each link on the footer', () => {
    cy.get('#navFooter a[href]').each(($el) => {
      const linkHref = $el.attr('href');

      if (linkHref === 'https://shop.ring.com/pages/neighbors-app') {
        cy.log(`Skipping link: ${linkHref}`);
        return; // skip this link, this page doesn`t exist - report to amazon.com
      }

      cy.request(linkHref).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
