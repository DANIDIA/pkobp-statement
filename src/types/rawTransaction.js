/**
 * Represents raw, normalized transaction.
 */
export default class RawTransaction {
    /**
     * @typedef {Object} RawTransactionParams
     * @property {string} orderDate
     * Date when the transaction was initiated.
     * @property {string} execDate
     * Date when the transaction was executed.
     * @property {string} type
     * Transaction type.
     * @property {string} description
     * Full transaction description.
     * @property {string} amount
     * Transaction amount, includes the sign and the point.
     * @property {string} currency
     * Currency of the transaction amount.
     * @property {string} endingBalance
     * Account balance after the transaction.
     */

    /**
     * @param {RawTransactionParams} params
     */
    constructor(params) {
        /** @type {string} Date when the transaction was initiated. */
        this.orderDate = params.orderDate
        /** @type {string} Date when the transaction was executed. */
        this.executionDate = params.execDate
        /** @type {string} Transaction type. */
        this.type = params.type
        /** @type {string} Full transaction description. */
        this.description = params.description
        /** @type {string} Transaction amount, includes the sign and the point. */
        this.amount = params.amount
        /** @type {string} Currency of the transaction. */
        this.amountCurrency = params.currency
        /** @type {string} Account balance after the transaction. */
        this.endingBalance = params.endingBalance
    }
}