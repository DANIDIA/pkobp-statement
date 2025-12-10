import { Atm } from "./Atm.js"
import { Receiver } from "./receiver.js"
import { Sender } from "./sender.js"
import { OperationLocation } from "./operationLocation.js"
import { LoanTransactionDescription } from "./loanTransactionDescription.js"

export class OperationDescription
{
    /**
     * @param {string} raw 
     * @param {string | null} title 
     * @param {string | null} phoneNumber 
     * @param {string | null} cardNumber 
     * @param {string | null} originalAmount 
     * @param {Date | null} executionDate 
     * @param {Atm | null} atm 
     * @param {string | null} identifier 
     * @param {string | null} referenceNumber 
     * @param {string | null} clientsReferenceIdentifier 
     * @param {Sender | null} sender 
     * @param {Receiver | null} receiver 
     * @param {OperationLocation | null} location 
     * @param {LoanTransactionDescription | null} loanTransaction 
     */
    constructor(raw, title, phoneNumber, cardNumber, originalAmount, executionDate,
        atm, identifier, referenceNumber, clientsReferenceIdentifier, sender,
        receiver, location, loanTransaction
    ) {
        /** @type {string} */
        this.raw = raw
        /** @type {string | null} */
        this.title = title 
        /** @type {string | null} */
        this.phoneNumber = phoneNumber 
        /** @type {string | null} */
        this.cardNumber = cardNumber 
        /** @type {string | null} */
        this.originalAmount = originalAmount 
        /** @type {Date | null} */
        this.executionDate = executionDate 
        /** @type {Atm | null} */
        this.atm = atm 
        /** @type {string | null} */
        this.identifier = identifier 
        /** @type {string | null} */
        this.referenceNumber = referenceNumber 
        /** @type {string | null} */
        this.clientsReferenceIdentifier = clientsReferenceIdentifier 
        /** @type {Sender | null} */
        this.sender = sender 
        /** @type {Receiver | null} */
        this.receiver = receiver 
        /** @type {OperationLocation | null} */
        this.location = location 
        /** @type {LoanTransactionDescription | null} */
        this.loanTransaction = loanTransaction 
    }

    hasTitle() { return this.title != null }
    hasPhoneNumber() { return this.phoneNumber != null }
    hasCardNumber() { return this.cardNumber != null }
    hasOriginalAmount() { return this.originalAmount != null }
    hasExecutionDate() { return this.executionDate != null }
    hasAtm() { return this.atm != null }
    hasIdentifier() { return this.identifier != null }
    hasReferenceNumber() { return this.referenceNumber != null }
    hasClientsReferenceIdentifier() { return this.clientsReferenceIdentifier != null }
    hasSender() { return this.sender != null }
    hasReceiver() { return this.receiver != null }
    hasLocation() { return this.location != null }
    hasLoanTransaction() { return this.loanTransaction != null }
}