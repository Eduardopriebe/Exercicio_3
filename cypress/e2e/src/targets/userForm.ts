import Chainable = Cypress.Chainable

const sign = (): Chainable<JQuery> => cy.get('a');
const userLegalName = (): Chainable<JQuery> => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input');
const cpfUser = (): Chainable<JQuery> => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input');
const emailUser = (): Chainable<JQuery> => cy.get(':nth-child(3) > :nth-child(1) > input');
const whatsUser = (): Chainable<JQuery> => cy.get(':nth-child(3) > :nth-child(2) > input');
const cepInput = (): Chainable<JQuery> => cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input');
const cepSearch = (): Chainable<JQuery> => cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input');
const number = (): Chainable<JQuery> => cy.get(':nth-child(4) > :nth-child(1) > input');
const complement = (): Chainable<JQuery> => cy.get(':nth-child(4) > :nth-child(2) > input');
const deliveryMethodMotocycle = (): Chainable<JQuery> => cy.get('.delivery-method > :nth-child(1)');
const deliveryMethodByke = (): Chainable<JQuery> => cy.get('.delivery-method > :nth-child(2)');
const deliveryMethodCar = (): Chainable<JQuery> => cy.get('.delivery-method > :nth-child(3)');
const driverLicense = (): Chainable<JQuery> => cy.get('[type="file"]');
const buttonSuccess = (): Chainable<JQuery> => cy.get('.button-success');
const confirmLabel = (): Chainable<JQuery> => cy.get('#swal2-title');
const confirmMsg = (): Chainable<JQuery> => cy.get('[id="swal2-html-container"]');
const validationName = (): Chainable<JQuery> => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error');
const validationCPF = (): Chainable<JQuery> => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > .alert-error');
const validationEmail = (): Chainable<JQuery> => cy.get(':nth-child(3) > :nth-child(1) > .alert-error');
const validationCep = (): Chainable<JQuery> => cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .alert-error');
const validationNumber = (): Chainable<JQuery> => cy.get(':nth-child(4) > :nth-child(1) > .alert-error');
const validationMethod = (): Chainable<JQuery> => cy.get(':nth-child(4) > .alert-error');
const validationDocument = (): Chainable<JQuery> => cy.get('form > :nth-child(6)');



export default {
    sign,
    userLegalName,
    cpfUser,
    emailUser,
    whatsUser,
    cepInput,
    cepSearch,
    number,
    complement,
    deliveryMethodMotocycle,
    deliveryMethodByke,
    deliveryMethodCar,
    driverLicense,
    buttonSuccess,
    confirmLabel,
    confirmMsg,
    validationName,
    validationCPF,
    validationEmail,
    validationCep,
    validationNumber,
    validationMethod,
    validationDocument,
    alert
}
