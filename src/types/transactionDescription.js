import Atm from "./atm.js"
import Receiver from "./receiver.js"
import Sender from "./sender.js"
import TransactionLocation from "./transactionLocation.js"
import LoanTransactionDescription from "./loanTransactionDescription.js"

/**
 * Represents a detailed description of a bank transaction.
 */
export default class TransactionDescription {
    /**
     * @typedef {Object} TransactionDescriptionParams
     * @property {string} raw 
     * Original raw description string.
     * @property {string | undefined} title
     * Short title or label for the transaction.
     * @property {string | undefined} phoneNumber 
     * Phone number associated with the transaction (probably is used for BLIK).
     * @property {string | undefined} cardNumber 
     * Card number used in the transaction.
     * @property {string | undefined} originalAmount 
     * Original transaction amount with the currency code.
     * @property {Date | undefined} executionDate 
     * Date when the transaction was executed.
     * @property {Atm | undefined} atm 
     * Information about an ATM if the transaction occured at an ATM.
     * @property {string | undefined} identifier 
     * Bank's internal identifier for the transaction (needs more investigation).
     * @property {string | undefined} referenceNumber 
     * Bank's internal reference number for the transaction (need more investigation).
     * @property {string | undefined} clientsReferenceIdentifier 
     * Client's identifier for the transaction.
     * @property {Sender | undefined} sender 
     * Details about the sender of the transaction.
     * @property {Receiver | undefined} receiver 
     * Details about the receiver of the transaction.
     * @property {TransactionLocation | undefined} location
     * A place where the transaction occured.
     * @property {LoanTransactionDescription | undefined} loanTransaction
     * Loan-specific details, if affects a loan.
     */

    /**
     * @param {TransactionDescriptionParams} params
     */
    constructor(params) {
        /** @type {string} Original raw description string. */
        this.raw = params.raw
        /** @type {string | undefined} Short title or label for the transaction. */
        this.title = params.title
        /** @type {string | undefined} Phone number associated with the transaction (probably is used for BLIK). */
        this.phoneNumber = params.phoneNumber
        /** @type {string | undefined} Card number used in the transaction. */
        this.cardNumber = params.cardNumber
        /** @type {string | undefined} Original transaction amount with the currency code. */
        this.originalAmount = params.originalAmount
        /** @type {Date | undefined} Date when the transaction was executed. */
        this.executionDate = params.executionDate
        /** @type {Atm | undefined} Information about an ATM if the transaction occured at an ATM. */
        this.atm = params.atm
        /** @type {string | undefined} Bank's internal identifier for the transaction (needs more investigation). */
        this.identifier = params.identifier
        /** @type {string | undefined} Bank's internal reference number for the transaction (need more investigation). */
        this.referenceNumber = params.referenceNumber
        /** @type {string | undefined} Client's identifier for the transaction. */
        this.clientsReferenceIdentifier = params.clientsReferenceIdentifier
        /** @type {Sender | undefined} Details about the sender of the transaction. */
        this.sender = params.sender
        /** @type {Receiver | undefined} Details about the receiver of the transaction. */
        this.receiver = params.receiver
        /** @type {TransactionLocation | undefined} A place where the transaction occured. */
        this.location = params.location
        /** @type {LoanTransactionDescription | undefined} Loan-specific details, if affects a loan. */
        this.loanTransaction = params.loanTransaction
    }
}