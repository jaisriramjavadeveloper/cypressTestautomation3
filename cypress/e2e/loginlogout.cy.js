describe('Orangehrm login logout ', ()=>{
    it('should log then and log out', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');

        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
         // Wait for 3 seconds before proceeding
    cy.wait(3000);

    // Click the dropdown menu in the top right
    cy.get('.oxd-userdropdown-name').click();

    // Wait for 3 seconds for the dropdown to open
    cy.wait(3000);

    // Click the logout button from the dropdown menu
    cy.get('.oxd-dropdown-menu').contains('Logout').click();

    // Verify that the user is redirected to the login page
    cy.url().should('include', '/auth/login');
    })
})