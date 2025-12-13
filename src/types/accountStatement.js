import { Transaction } from "./transaction.js";

export class AccountStatement 
{
    /**
     * @param {string} accountNumber 
     * @param {Date} sinceDate 
     * @param {Date} toDate 
     * @param {Array<Transaction>} transactions 
     */
    constructor(accountNumber, sinceDate, toDate, transactions) {
        /** @type {string} */
        this.accountNumber = accountNumber
        /** @type {Date} */
        this.sinceDate = sinceDate
        /** @type {Date} */
        this.toDate = toDate
        /** @type {Array<Transaction>} */
        this.transactions = transactions
    }
}