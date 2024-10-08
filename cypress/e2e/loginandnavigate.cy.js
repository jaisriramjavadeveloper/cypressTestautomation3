import LoginPage from '../pageObjects/LoginPage';
import NavigationPage from '../pageObjects/navigationPage';

describe('OrangeHRM Login and Navigation with POM', () => {
  const loginPage = new LoginPage();
  const navigationPage = new NavigationPage();

  it('should log in, navigate through the menu, and then log out using Page Object Model', () => {
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

    // Navigate through various items in the left-side menu
    navigationPage.navigateMenuItem('Admin');
    navigationPage.navigateMenuItem('PIM');
    navigationPage.navigateMenuItem('Leave');
    navigationPage.navigateMenuItem('Time');
    navigationPage.navigateMenuItem('Recruitment');
    navigationPage.navigateMenuItem('My Info');
    navigationPage.navigateMenuItem('Performance');
    navigationPage.navigateMenuItem('Dashboard');
    navigationPage.navigateMenuItem('Directory');
    navigationPage.navigateMenuItem('Maintenance');
    navigationPage.navigateMenuItem('Buzz');

    // Logout using the method from the NavigationPage
    navigationPage.logout();

    // Verify that the user is redirected to the login page
    cy.url().should('include', '/auth/login');
  });
});
