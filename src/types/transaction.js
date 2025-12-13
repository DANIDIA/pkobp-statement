import { TransactionType } from "#enums/transactionType.js";
import { CurrencyType } from "#enums/currencyType.js";
import TransactionDescription from "./transactionDescription.js";

export default class Transaction {
    /**
     * @param {Date} orderDate 
     * @param {Date} execDate 
     * @param {TransactionType} type 
     * @param {TransactionDescription} description 
     * @param {number} amount 
     * @param {CurrencyType} amountCurrency 
     * @param {number} endingBalance 
     */
    constructor(orderDate, execDate, type, description, amount, amountCurrency, endingBalance) {
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
        /** @type {CurrencyType} */
        this.amountCurrency = amountCurrency
        /** @type {number} */
        this.endingBalance = endingBalance
    }
}