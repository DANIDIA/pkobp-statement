import { TransactionType } from "#enums/transactionType.js";
import { CurrencyCode } from "#src/enums/currencyCode.js";
import TransactionDescription from "./transactionDescription.js";

/**
 * Represents a bank transaction.
 */
export default class Transaction {
    /**
     * @typedef {Object} TransactionParams
     * @property {Date} orderDate
     * Date when the transaction was initiated.
     * @property {Date} execDate
     * Date when the transaction was executed.
     * @property {TransactionType} type
     * Transaction type.
     * @property {string} rawType
     * Original raw type string.
     * @property {TransactionDescription} description
     * Full transaction description.
     * @property {number} amount
     * Transaction amount, includes the sign and the point.
     * @property {CurrencyCode} currency
     * Currency of the transaction amount.
     * @property {number} endingBalance
     * Account balance after the transaction.
     */

    /**
     * @param {TransactionParams} params
     */
    constructor(params) {
        /** @type {Date} Date when the transaction was initiated. */
        this.orderDate = params.orderDate
        /** @type {Date} Date when the transaction was executed. */
        this.executionDate = params.execDate
        /** @type {TransactionType} Transaction type. */
        this.type = params.type
        /** @type {TransactionDescription} Full transaction description. */
        this.description = params.description
        /** @type {number} Transaction amount, includes the sign and the point. */
        this.amount = params.amount
        /** @type {CurrencyCode} Currency of the transaction amount. */
        this.amountCurrency = params.currency
        /** @type {number} Account balance after the transaction. */
        this.endingBalance = params.endingBalance
    }
}