

describe('RWA Register Tests', () => {
  
    const selectorsList={
     firstNameField: '#firstName',
     lastNameField: '#lastName',
     usernameField: '#username',
     passwordField: '#password',
     passwordConfirmField: '#confirmPassword',
     submitButton: '[data-test="signup-submit"]',
     confirmation: '.MuiTypography-h5',
     passwordErrorAlert: '#confirmPassword-helper-text', 
     nameErrorAlert: '#firstName-helper-text',
     usernameAlert: '#username-helper-text',
    }


   it('Campos obrigatórios preenchidos', () => {
     cy.visit('http://localhost:3000/signup');
     cy.get(selectorsList.firstNameField).type('Paulo');
     cy.get(selectorsList.lastNameField).type('Roberto');
     cy.get(selectorsList.usernameField).type('paulinho');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.passwordConfirmField).type('123456');
     cy.get(selectorsList.submitButton).click();
     cy.get(selectorsList.confirmation).contains('Sign in');
  });

   it('Campo senha vazio', () => {
     cy.visit('http://localhost:3000/signup');
     cy.get(selectorsList.firstNameField).type('Paulo');
     cy.get(selectorsList.lastNameField).type('Roberto');
     cy.get(selectorsList.usernameField).type('paulinho');
     cy.get(selectorsList.passwordConfirmField).type('123456'); 
     cy.get(selectorsList.passwordErrorAlert).contains('Password does not match');
  });

   it('Campo nome vazio', () => {
     cy.visit('http://localhost:3000/signup');
     cy.get(selectorsList.lastNameField).type('Roberto');
     cy.get(selectorsList.usernameField).type('paulinho');
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.passwordConfirmField).type('123456');
     cy.get(selectorsList.nameErrorAlert).contains('First Name is required');
  });

   it('Nome de usuário vazio', () => {
     cy.visit('http://localhost:3000/signup');
     cy.get(selectorsList.firstNameField).type('Paulo');
     cy.get(selectorsList.lastNameField).type('Roberto');
     cy.get(selectorsList.usernameField).click();
     cy.get(selectorsList.passwordField).type('123456');
     cy.get(selectorsList.passwordConfirmField).type('123456');
     cy.get(selectorsList.usernameAlert).contains('Username is required');
  });
});