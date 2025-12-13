import { TransactionType } from "#enums/transactionType.js";
import { CurrencyCode } from "#src/enums/currencyCode.js";
import TransactionDescription from "./transactionDescription.js";

export default class Transaction {
    /**
     * @param {Date} orderDate 
     * @param {Date} execDate 
     * @param {TransactionType} type 
     * @param {TransactionDescription} description 
     * @param {number} amount 
     * @param {CurrencyCode} currency 
     * @param {number} endingBalance 
     */
    constructor(orderDate, execDate, type, description, amount, currency, endingBalance) {
        /** @type {Date} */
        this.orderDate = orderDate
        /** @type {Date} */
        this.executionDate = execDate
        /** @type {TransactionType} */
        this.type = type
        /** @type {TransactionDescription} */
        this.description = description
        /** @type {number} */
        this.amount = amount
        /** @type {CurrencyCode} */
        this.amountCurrency = currency
        /** @type {number} */
        this.endingBalance = endingBalance
    }
}