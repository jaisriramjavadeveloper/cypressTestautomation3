import LoginPage from '../pageObjects/LoginPage';

describe('OrangeHRM Login and Logout with POM', () => {
  const loginPage = new LoginPage();

  it('should log in and then log out using Page Object Model', () => {
    // Visit the login page
    loginPage.visit();
    
    // Enter username and password
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    
    // Click the login button
    loginPage.clickLogin();

    // Wait for the dashboard to load and verify it contains "Dashboard" in the URL
    cy.url().should('include', '/dashboard');

    // Wait for 3 seconds before proceeding
    cy.wait(3000);

    // Logout using the method from the page object
    loginPage.logout();

    // Verify that the user is redirected to the login page
    cy.url().should('include', '/auth/login');
  });
});
