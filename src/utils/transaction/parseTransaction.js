import Transaction from "#src/types/transaction.js";
import RawTransaction from "#types/rawTransaction.js";
import parseCurrencyType from "#src/utils/currency/parseCurrencyType.js";
import parseTransactionDescription from "#utils/transactionDescription/parseTransactionDescription.js";
import parseTransactionType from "./parseTransactionType.js";

/**
 * @param {RawTransaction} rawTransaction 
 * @returns {Transaction}
 */
export function parseTransaction(rawTransaction) {
    const orderDate = new Date(rawTransaction.orderDate)
    const execDate = new Date(rawTransaction.executionDate)
    const type = parseTransactionType(rawTransaction.type)
    const description = parseTransactionDescription(rawTransaction.description, type)
    const amount = parseFloat(rawTransaction.amount)
    const amountCurrency = parseCurrencyType(rawTransaction.amountCurrency)
    const endingBalance = parseFloat(rawTransaction.endingBalance)

    const newOp = new Transaction(orderDate, execDate, type, description, amount, amountCurrency, endingBalance)
    return newOp
}