import { Operation } from "./operation.js";

export class AccountStatement 
{
    /**
     * @param {string} accountNumber 
     * @param {Date} sinceDate 
     * @param {Date} toDate 
     * @param {Array<Operation>} operations 
     */
    constructor(accountNumber, sinceDate, toDate, operations) {
        /** @type {string} */
        this.accountNumber = accountNumber
        /** @type {Date} */
        this.sinceDate = sinceDate
        /** @type {Date} */
        this.toDate = toDate
        /** @type {Array<Operation>} */
        this.operations = operations
    }
}