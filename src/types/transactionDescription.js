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
     * @param {string} raw 
     *        Original raw description string.
     * @param {string | null} title
     *        Short title or label for the transaction.
     * @param {string | null} phoneNumber 
     *        Phone number associated with the transaction (probably is used for BLIK).
     * @param {string | null} cardNumber 
     *        Card number used in the transaction.
     * @param {string | null} originalAmount 
     *        Original transaction amount with the currency code.
     * @param {Date | null} executionDate 
     *        Date when the transaction was executed.
     * @param {Atm | null} atm 
     *        Information about an ATM if the transaction occured at an ATM.
     * @param {string | null} identifier 
     *        Bank's internal identifier for the transaction (needs more investigation).
     * @param {string | null} referenceNumber 
     *        Bank's internal reference number for the transaction (need more investigation).
     * @param {string | null} clientsReferenceIdentifier 
     *        Client's identifier for the transaction.
     * @param {Sender | null} sender 
     *        Details about the sender of the transaction.
     * @param {Receiver | null} receiver 
     *        Details about the receiver of the transaction.
     * @param {TransactionLocation | null} location
     *        A place where the transaction occured.
     * @param {LoanTransactionDescription | null} loanTransaction
     *        Loan-specific details, if affects a loan.
     */
    constructor(raw, title, phoneNumber, cardNumber, originalAmount, executionDate,
        atm, identifier, referenceNumber, clientsReferenceIdentifier, sender,
        receiver, location, loanTransaction
    ) {
        /** @type {string} Original raw description string. */
        this.raw = raw
        /** @type {string | null} Short title or label for the transaction. */
        this.title = title
        /** @type {string | null} Phone number associated with the transaction (probably is used for BLIK). */
        this.phoneNumber = phoneNumber
        /** @type {string | null} Card number used in the transaction. */
        this.cardNumber = cardNumber
        /** @type {string | null} Original transaction amount with the currency code. */
        this.originalAmount = originalAmount
        /** @type {Date | null} Date when the transaction was executed. */
        this.executionDate = executionDate
        /** @type {Atm | null} Information about an ATM if the transaction occured at an ATM. */
        this.atm = atm
        /** @type {string | null} Bank's internal identifier for the transaction (needs more investigation). */
        this.identifier = identifier
        /** @type {string | null} Bank's internal reference number for the transaction (need more investigation). */
        this.referenceNumber = referenceNumber
        /** @type {string | null} Client's identifier for the transaction. */
        this.clientsReferenceIdentifier = clientsReferenceIdentifier
        /** @type {Sender | null} Details about the sender of the transaction. */
        this.sender = sender
        /** @type {Receiver | null} Details about the receiver of the transaction. */
        this.receiver = receiver
        /** @type {TransactionLocation | null} A place where the transaction occured. */
        this.location = location
        /** @type {LoanTransactionDescription | null} Loan-specific details, if affects a loan. */
        this.loanTransaction = loanTransaction
    }
}