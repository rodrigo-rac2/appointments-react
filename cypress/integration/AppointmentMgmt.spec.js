import AppointmentMgmtPage from '../support/AppointmentMgmtPage';

describe('Appointment Management Tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit("http://localhost:3000/")
    })

    it('Check page Loads Correctly', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();

        appointmentMgmtPage.assertPageLoaded();
    })

    // Happy Path
    it('Check page Submits Correctly if all Fields are entered', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setPetName(`Toto`)
        appointmentMgmtPage.setOwnerName(`Toto`)
        appointmentMgmtPage.setDate(`2021-07-13`)
        appointmentMgmtPage.setTime('19:15')
        appointmentMgmtPage.setSymptoms(`Toto has a stomach ache`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertAppointmentCreated();
    })

    // negative tests
    it('Submit with no fields filled', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();
    })
    it('Submit pet name only', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setPetName(`Toto`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();

    })
    it('Submit owner name only', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setOwnerName(`Rodrigo`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();

    })
    it('Submit symptoms only', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setSymptoms(`Toto has a stomach ache`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();

    })

    it('Submit owner and pet name only', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setPetName(`Toto`)
        appointmentMgmtPage.setOwnerName(`Rodrigo`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();

    })
    it('Submit pet name and symptoms only', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setPetName(`Toto`)
        appointmentMgmtPage.setSymptoms(`Toto has a stomach ache`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();

    })
    it('Submit pet name, owner and description only', () => {
        const appointmentMgmtPage = new AppointmentMgmtPage();
        appointmentMgmtPage.assertPageLoaded();
        appointmentMgmtPage.setPetName(`Toto`)
        appointmentMgmtPage.setOwnerName(`Toto`)
        appointmentMgmtPage.setSymptoms(`Toto has a stomach ache`)
        appointmentMgmtPage.clickAddAppointment();
        appointmentMgmtPage.assertErrorAlertVisible();

    })
    // ...
})