import Transaction from "./transaction.js";

/**
 * Represents bank account statement for specific time range.
 */
export default class AccountStatement {
    /**
     * @param {string} accountNumber 
     *        Bank account number.
     * @param {Date} sinceDate 
     *        Start date of the statement.
     * @param {Date} toDate 
     *        End date of the statement.
     * @param {Array<Transaction>} transactions
     *        A list of transactions. 
     */
    constructor(accountNumber, sinceDate, toDate, transactions) {
        /** @type {string} Bank account number. */
        this.accountNumber = accountNumber
        /** @type {Date} Start date of the statement. */
        this.sinceDate = sinceDate
        /** @type {Date} End date of the statement. */
        this.toDate = toDate
        /** @type {Array<Transaction>} A list of transactions. */
        this.transactions = transactions
    }
}