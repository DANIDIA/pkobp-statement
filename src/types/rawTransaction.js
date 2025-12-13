/**
 * Represents raw, normalized transaction.
 */
export default class RawTransaction {
    /**
     * @param {string} orderDate 
     *        Date when the transaction was initiated (yyyy-mm-ddd format).
     * @param {string} execDate 
     *        Date when the transaction was executed (yyyy-mm-ddd format).
     * @param {string} type 
     *        Transaction name that will be parsed later to the corresponding type.
     * @param {string} description 
     *        Full transaction description.
     * @param {string} amount 
     *        Transaction amount, includes the sign and the point. 
     * @param {string} amountCurrency 
     *        Currency of the transaction.
     * @param {string} endingBalance 
     *        Account balance after the transaction.
     */
    constructor(orderDate, execDate, type, description, amount, amountCurrency, endingBalance) {
        /** @type {string} Date when the transaction was initiated. */
        this.orderDate = orderDate
        /** @type {string} Date when the transaction was executed. */
        this.executionDate = execDate
        /** @type {string} Transaction type. */
        this.type = type
        /** @type {string} Full transaction description. */
        this.description = description
        /** @type {string} Transaction amount, includes the sign and the point. */
        this.amount = amount
        /** @type {string} Currency of the transaction. */
        this.amountCurrency = amountCurrency
        /** @type {string} Account balance after the transaction. */
        this.endingBalance = endingBalance
    }
}