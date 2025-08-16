

describe('RWA Login Tests', () => {
  
    const selectorsList={
     usernameField: '#username',
     passwordField: '#password',
     loginButton: '[data-test="signin-submit"]',
     loginConfirmation: '[data-test="sidenav-home"]',
     errorAlert: '[data-test="signin-error"]',
    }


   it('Login com usuário e senha válidos', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('marcelqa');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.loginConfirmation).contains('Home');
  });

   it('Login com senha incorreta', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('marcelqa');
     cy.get(selectorsList.passwordField).type('456123');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.errorAlert).contains('Username or password is invalid');  
  });

   it('Login com nome de usuário inexistente', () => {
     cy.visit('http://localhost:3000');
     cy.get(selectorsList.usernameField).type('none');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.loginButton).click();
     cy.get(selectorsList.errorAlert).contains('Username or password is invalid'); 
  });
});


