class AppointmentMgmtPage {
    constructor() {}
    
    assertPageLoaded() {
        cy.get("[data-testid='app-name']").should('be.visible');
        cy.get("[data-testid='btn-submit']").should('be.visible')
        cy.get("[data-testid='btn-submit']").should('be.enabled')
        cy.get("[data-testid='dynamic-title']").should('be.visible')
        cy.get("[data-testid='Title']").should('be.visible')
    }

    setPetName(petName) {
        cy.get("[data-testid='pet']").type(petName);
    }

    setOwnerName(ownerName) {
        cy.get("[data-testid='owner']").type(ownerName);
    }

    // YYYY-mm-dd
    setDate(date) {
        cy.get("[data-testid='date']").type(date);
    }

    // HH:MM AM/PM
    setTime(time) {
        cy.get("[data-testid='time']").type(time);
    }

    setSymptoms(symptoms) {
        cy.get("[data-testid='symptoms']").type(symptoms);
    }

    clickAddAppointment() {
        cy.get("[data-testid='btn-submit']").click();
    }
    
    assertErrorAlertVisible() {
        cy.get("[data-testid='alert']").should('be.visible');  
    }

    assertAppointmentCreated() {
        cy.get("[data-testid='appointment']").should('be.visible');  
    }
}

export default AppointmentMgmtPage;