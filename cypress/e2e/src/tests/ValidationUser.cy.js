import { describe, it}  from 'mocha';
import { beforeEach } from 'mocha';
import '../../../support/commands';
import userFomActions from '../actions/userFomActions';


describe('Users', () => { 
  beforeEach(() => {
    //Access link from the page
    userFomActions.accessSite()
  
  });

  it('Register a user with success', () => {
      //Click on register button  
      userFomActions.registerClick()
      
      //Call a constructors from fill the fields with user from user
      userFomActions.userInputInformationName()
      userFomActions.userInputInformationCpf()
      userFomActions.userInputInformationEmail()
      userFomActions.userInputInformationWhats()
      
      //Call a constructor from fill address fields
      userFomActions.addressInformation()

      //Select delivery method - Bicycle
      userFomActions.deliveryMethodsByke()

      //Select or drag n drop folder from CHN
      userFomActions.folderDocument()

      //Register user
      userFomActions.successClick()

      //Confirm Register from user on system.
      userFomActions.confirmRegister()
    })

  it('Try Register a user wihout all mandatory fields information', () => {
      //Click on register button  
      userFomActions.registerClick()

      //Register user without information mandatorys on page
      userFomActions.successClick()

      //Validade message from mandatory if fill field Name
      userFomActions.validationNameField()

      //Validade message from mandatory if fill field CPF
      userFomActions.validationCpfField()

      //Validade message from mandatory if fill field Email
      userFomActions.validationEmailField()

      //Validade message from mandatory if fill field CEP
      userFomActions.validationCepField()

      //Validade message from mandatory if fill Number from address
      userFomActions.validationNumberField()

      //Validade message from mandaroty if fill method of delivery
      userFomActions.validationMethod()

      //Validade message from mandatory if fill document from user
      userFomActions.validationDoc()
    })
  })