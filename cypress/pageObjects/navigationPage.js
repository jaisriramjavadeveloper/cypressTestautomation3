class NavigationPage {
    navigateMenuItem(itemName) {
      // Click the menu item with the given name and wait for 3 seconds
      cy.get('.oxd-main-menu').contains(itemName).click();
      cy.wait(3000); // Wait for 3 seconds after each click
      if (itemName === 'Maintenance') {
        // Wait for the dialog to appear and click "Cancel"
        cy.get('.oxd-dialog-container').within(() => {
          cy.contains('Cancel').click();
        });
        cy.wait(3000); // Wait after clicking "Cancel"
      }
    }
  
    logout() {
      // Click the dropdown menu in the top right
      cy.get('.oxd-userdropdown-name').click();
  
      // Wait for the dropdown to open and then click logout
      cy.get('.oxd-dropdown-menu').contains('Logout').click();
    }
  }
  
  export default NavigationPage;
  