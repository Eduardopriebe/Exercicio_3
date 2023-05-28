import userForm from "../targets/userForm";
const baseUrl = Cypress.config('baseUrl');

function registerClick(){
    //Click on register button
    userForm.sign().click()
}

function userInputInformation(){
    // Full the field with a name from user
    userForm.userLegalName().type(Cypress.env('userName'), { log : false});   
    // Full the field with a CPF from user
    userForm.cpfUser().type(Cypress.env('userCpf'));
    // Full the field with a CPF from user
    userForm.emailUser().type(Cypress.env('userEmail'), { log : false});
    // Full the field with a CPF from user
    userForm.whatsUser().type(Cypress.env('userWhats'), { log : false});
}

function userInputInformationName(){
    // Full the field with a name from user
    userForm.userLegalName().type(Cypress.env('userName'), { log : false});
}
function userInputInformationCpf(){
    // Full the field with a CPF from user
    userForm.cpfUser().type(Cypress.env('userCpf'), { log : false});
}

function userInputInformationEmail(){
    // Full the field with a CPF from user
    userForm.emailUser().type(Cypress.env('userEmail'), { log : false});
}

function userInputInformationWhats(){
    // Full the field with a CPF from user
    userForm.whatsUser().type(Cypress.env('userWhats'), { log : false});
}

function addressInformation(){
    //Full information from Cep from the user
    userForm.cepInput().type(Cypress.env('userCep'), { log : false});

    //Click on CEP search to confirm if the userCep is valid
    userForm.cepSearch().click();

    //Full information from number of Address from the user
    userForm.number().type(Cypress.env('userNumberAddress'), { log : false});

    //Full information from Address Complement from the user
    userForm.complement().type(Cypress.env('userComplementAddress'), { log : false});
}

function deliveryMethodsByke(){
//Choose a metod of delivery
//Byke method chosen
userForm.deliveryMethodByke().click();
}

function deliveryMethodCar(){
//Car/Van method
userForm.deliveryMethodCar().click();
}

function deliveryMethodMotocycle(){
//Motocycle method
userForm.deliveryMethodMotocycle().click();
}

function folderDocument(){
//Choose ou drag-n-drop driver license folder from the user.
userForm.driverLicense()
.selectFile((Cypress.env('pathImagesLoremIpsum')), { force: true });
}

function successClick(){
//Click on button success to confirm
userForm.buttonSuccess().click();
}

function confirmRegister(){
//Verify if the label from the success it showing correct
userForm.confirmLabel().should("have.text", (Cypress.env('confirmLabel')), { log : false});

//Verify if the Message from the success it showing correct
userForm.confirmMsg().should("have.text", (Cypress.env('confirmMsg')), { log : false})
}

function accessSite(){
    //Access link using baseUrl
    cy.visit('')
}

function validationNameField(){
    userForm.validationName().should("have.text", (Cypress.env('mandatoryNameField')), { log : false})
}

function validationCpfField(){
    userForm.validationCPF().should("have.text", (Cypress.env('mandatoryCpfField')), { log : false})
}

function validationEmailField(){
    userForm.validationEmail().should("have.text", (Cypress.env('mandatoryEmailField')), { log : false})
}

function validationCepField(){
    userForm.validationCep().should("have.text", (Cypress.env('mandatoryCepField')), { log : false})
}

function validationNumberField(){
    userForm.validationNumber().should("have.text", (Cypress.env('mandatoryNumberField')), { log : false})
}

function validationMethod(){
    userForm.validationMethod().should("have.text", (Cypress.env('mandatoryMethod')), { log : false})
}

function validationDoc(){
    userForm.validationDocument().should("have.text", (Cypress.env('mandatoryDoc')), { log : false})
}
export default {registerClick, 
                userInputInformation,
                userInputInformationName,
                userInputInformationCpf,
                userInputInformationEmail,
                userInputInformationWhats,
                addressInformation,
                deliveryMethodsByke,
                deliveryMethodMotocycle,
                deliveryMethodCar,
                folderDocument,
                successClick,
                confirmRegister, 
                accessSite,
                validationNameField,
                validationCpfField,
                validationEmailField,
                validationCepField,
                validationNumberField,
                validationMethod,
                validationDoc
            }