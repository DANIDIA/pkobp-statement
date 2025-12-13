import { TransactionType, parseTransactionType } from "../enums/transactionType.js";
import { TransactionDescription } from "./transactionDescription.js";
import parseTransactionDescription from "../utils/parseTransactionDescription.js";
import { RawTransaction } from "./rawTransaction.js";
import { CurrencyType, parseCurrency } from "../enums/currencyType.js";

export class Transaction
{
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

    /**
     * @param {RawTransaction} rawTransaction 
     * @returns {Transaction}
     */
    static parse(rawTransaction)
    {
        const orderDate = new Date(rawTransaction.orderDate)
        const execDate = new Date(rawTransaction.executionDate)
        const type = parseTransactionType(rawTransaction.type)
        const description = parseTransactionDescription(rawTransaction.description, type)
        const amount = parseFloat(rawTransaction.amount)
        const amountCurrency = parseCurrency(rawTransaction.amountCurrency)
        const endingBalance = parseFloat(rawTransaction.endingBalance)

        const newOp = new Transaction(orderDate, execDate, type, description, amount, amountCurrency, endingBalance)
        return newOp
    }
}