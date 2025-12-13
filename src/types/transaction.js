import { TransactionType } from "#enums/transactionType.js";
import { CurrencyCode } from "#src/enums/currencyCode.js";
import TransactionDescription from "./transactionDescription.js";

/**
 * Represents a bank transaction.
 */
export default class Transaction {
    /**
     * @param {Date} orderDate 
     *        Date when the transaction was initiated.
     * @param {Date} execDate 
     *        Date when the transaction was executed.
     * @param {TransactionType} type 
     *        Transaction type.
     * @param {TransactionDescription} description 
     *        Full transaction description.
     * @param {number} amount 
     *        Transaction amount, includes the sign and the point. 
     * @param {CurrencyCode} currency 
     *        Currency of the transaction.
     * @param {number} endingBalance 
     *        Account balance after the transaction.
     */
    constructor(orderDate, execDate, type, description, amount, currency, endingBalance) {
        /** @type {Date} Date when the transaction was initiated. */
        this.orderDate = orderDate
        /** @type {Date} Date when the transaction was executed. */
        this.executionDate = execDate
        /** @type {TransactionType} Transaction type. */
        this.type = type
        /** @type {TransactionDescription} Full transaction description. */
        this.description = description
        /** @type {number} Transaction amount, includes the sign and the point. */
        this.amount = amount
        /** @type {CurrencyCode} Currency of the transaction amount. */
        this.amountCurrency = currency
        /** @type {number} Account balance after the transaction. */
        this.endingBalance = endingBalance
    }
}