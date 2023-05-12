const appointmentPage = require('../support/pages/AppointmentPage');
const app = require("../../src/App");

describe('Appointment Page E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Happy Path Test - Add appointmnet', () => {
    appointmentPage.assertPageLoaded();
    appointmentPage.assertAppointmentScheduled(false);

    cy.fixture('petAppointmentFluffy').then((appointmentInfo) => {
      appointmentPage.setPetNameTextInput(appointmentInfo.petName);
      appointmentPage.setOwnerNameTextInput(appointmentInfo.ownerName);
      appointmentPage.setDateInput(`${appointmentInfo.date.year}-${appointmentInfo.date.month}-${appointmentInfo.date.day}`);
      appointmentPage.setTimeInput(`${appointmentInfo.time.hour}:${appointmentInfo.time.minutes}`);
      appointmentPage.setSymptomsInput(appointmentInfo.symptoms);

      appointmentPage.clickAddAppointmentButton();
      appointmentPage.assertAppointmentScheduled(true);
      appointmentPage.assertAppointmentInformation(appointmentInfo.petName, appointmentInfo.ownerName, `${appointmentInfo.date.year}-${appointmentInfo.date.month}-${appointmentInfo.date.day}`,
          `${appointmentInfo.time.hour}:${appointmentInfo.time.minutes}`, appointmentInfo.symptoms);
    })
    // delete appointment
    appointmentPage.clickDeleteAppointmentButton();
    appointmentPage.assertAppointmentScheduled(false);
  });

  it('Attempt to add apointment without a field and validate error message', () => {
    appointmentPage.assertPageLoaded();
    appointmentPage.assertAppointmentScheduled(false);

    cy.fixture('petAppointmentFluffy').then((appointmentInfo) => {
      appointmentPage.setPetNameTextInput(appointmentInfo.petName);
      appointmentPage.setOwnerNameTextInput(appointmentInfo.ownerName);
      appointmentPage.setDateInput(`${appointmentInfo.date.year}-${appointmentInfo.date.month}-${appointmentInfo.date.day}`);
      appointmentPage.setTimeInput(`${appointmentInfo.time.hour}:${appointmentInfo.time.minutes}`);

      appointmentPage.clickAddAppointmentButton();
    });
    appointmentPage.assertAlertDisplayed();
  });

  it('Attempt to add apointment with an invalid date and validate error message', () => {}
  );
})