export class RawTransaction
{
    /**
     * @param {string} orderDate 
     * @param {string} execDate 
     * @param {string} type 
     * @param {string} description 
     * @param {string} amount 
     * @param {string} amountCurrency 
     * @param {string} endingBalance 
     */
    constructor(orderDate, execDate, type, description, amount, amountCurrency, endingBalance) {
        /** @type {string} */
        this.orderDate = orderDate
        /** @type {string} */
        this.executionDate = execDate
        /** @type {string} */
        this.type = type
        /** @type {string} */
        this.description = description
        /** @type {string} */
        this.amount = amount
        /** @type {string} */
        this.amountCurrency = amountCurrency
        /** @type {string} */
        this.endingBalance = endingBalance
    }
}