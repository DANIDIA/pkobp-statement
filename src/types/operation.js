import { OperationType, parseOperationType } from "../enums/operationType.js";
import { OperationDescription } from "./operationDescription.js";
import parseOperationDescription from "../utils/parseOperationDescription.js";
import { RawOperation } from "./rawOperation.js";
import { Currency, parseCurrency } from "../enums/currency.js";

export class Operation
{
    /**
     * @param {Date} orderDate 
     * @param {Date} execDate 
     * @param {OperationType} type 
     * @param {OperationDescription} description 
     * @param {number} amount 
     * @param {Currency} amountCurrency 
     * @param {number} endingBalance 
     */
    constructor(orderDate, execDate, type, description, amount, amountCurrency, endingBalance) {
        /** @type {Date} */
        this.orderDate = orderDate
        /** @type {Date} */
        this.executionDate = execDate
        /** @type {OperationType} */
        this.type = type
        /** @type {OperationDescription} */
        this.description = description
        /** @type {number} */
        this.amount = amount
        /** @type {Currency} */
        this.amountCurrency = amountCurrency
        /** @type {number} */
        this.endingBalance = endingBalance
    }

    /**
     * @param {RawOperation} rawOperation 
     * @returns {Operation}
     */
    static parse(rawOperation)
    {
        const orderDate = new Date(rawOperation.orderDate)
        const execDate = new Date(rawOperation.executionDate)
        const type = parseOperationType(rawOperation.type)
        const description = parseOperationDescription(rawOperation.description, type)
        const amount = parseFloat(rawOperation.amount)
        const amountCurrency = parseCurrency(rawOperation.amountCurrency)
        const endingBalance = parseFloat(rawOperation.endingBalance)

        const newOp = new Operation(orderDate, execDate, type, description, amount, amountCurrency, endingBalance)
        return newOp
    }
}