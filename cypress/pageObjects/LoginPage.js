class LoginPage {
    visit() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    enterUsername(username) {
      cy.get('input[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    clickLogin() {
      cy.get('button[type="submit"]').click();
    }
  
    logout() {
      // Click the dropdown menu in the top right
      cy.get('.oxd-userdropdown-name').click();
  
      // Wait for the dropdown to open and then click logout
      cy.get('.oxd-dropdown-menu').contains('Logout').click();
    }
  }
  
  export default LoginPage;
  