const e = require('./Elements');

class AppointmentPage {
    setPetNameTextInput(petName) {
        cy.get(e.ELEMENTS.petNameInput).clear().type(petName);
    }
    getPetNameTextInput(petName) {
        cy.get(e.ELEMENTS.petNameInput).clear().then($ => {
            return $.text();
        });
    }
    setOwnerNameTextInput(ownerName) {
        cy.get(e.ELEMENTS.ownerNameInput).clear().type(ownerName);
    }
    setDateInput(date) {
        cy.get(e.ELEMENTS.appointmentDateInput).clear().type(date);
    }
    setTimeInput(time) {
        cy.get(e.ELEMENTS.appointmentTimeInput).clear().type(time);
    }
    setSymptomsInput(symptoms) {
        cy.get(e.ELEMENTS.symptomsInput).clear().type(symptoms);
    }

    //actions
    clickAddAppointmentButton() {
        cy.get(e.ELEMENTS.addAppointmentButton).click({force:true});
    }
    clickDeleteAppointmentButton() {
        cy.get(e.ELEMENTS.deleteAppointmentButton).click({force:true});
    }

    //asserts
    assertPageLoaded() {
        cy.get(e.ELEMENTS.appointmentPageHeader).should('be.visible');
        cy.get(e.ELEMENTS.createAppointmentHeader).should('be.visible');
        cy.get(e.ELEMENTS.appointmentStatusIndicator).should('be.visible');
        cy.get(e.ELEMENTS.petNameInput).should('be.visible');
        cy.get(e.ELEMENTS.ownerNameInput).should('be.visible');
        cy.get(e.ELEMENTS.appointmentDateInput).should('be.visible');
        cy.get(e.ELEMENTS.appointmentTimeInput).should('be.visible');
        cy.get(e.ELEMENTS.symptomsInput).should('be.visible');
    };
    assertAppointmentScheduled(scheduled) {
        if (scheduled == true) {
            cy.get(e.ELEMENTS.appointmentStatusIndicator).should('have.text', 'Manage your appointments');
        } else {
            cy.get(e.ELEMENTS.appointmentStatusIndicator).should('have.text', 'There are no appointments');
        }
    };
    assertAppointmentInformation(petName, ownerName, date, time, symptoms) {
        cy.get(e.ELEMENTS.appointmentCard).contains(petName);
        cy.get(e.ELEMENTS.appointmentCard).contains(ownerName);
        cy.get(e.ELEMENTS.appointmentCard).contains(date);
        cy.get(e.ELEMENTS.appointmentCard).contains(time);
        cy.get(e.ELEMENTS.appointmentCard).contains(symptoms);
    }
    assertAlertDisplayed() {
        cy.get(e.ELEMENTS.alertCard).should('be.visible');
    }
}

export default new AppointmentPage();