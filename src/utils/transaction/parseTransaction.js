import Transaction from "#src/types/transaction.js";
import RawTransaction from "#types/rawTransaction.js";
import parseCurrencyCode from "#src/utils/currency/parseCurrencyCode.js";
import parseTransactionDescription from "#utils/transactionDescription/parseTransactionDescription.js";
import parseTransactionType from "./parseTransactionType.js";

/**
 * Parses a raw transaction representation into a transaction.
 * 
 * @param {RawTransaction} rawTransaction
 * @returns {Transaction}
 */
export function parseTransaction(rawTransaction) {
    const orderDate = new Date(rawTransaction.orderDate);
    const execDate = new Date(rawTransaction.executionDate);
    const type = parseTransactionType(rawTransaction.type);
    const description = parseTransactionDescription(rawTransaction.description, type);
    const amount = parseFloat(rawTransaction.amount);
    const amountCurrency = parseCurrencyCode(rawTransaction.amountCurrency);
    const endingBalance = parseFloat(rawTransaction.endingBalance);

    return new Transaction({
        orderDate: orderDate,
        execDate: execDate,
        type: type,
        description: description,
        amount: amount,
        currency: amountCurrency,
        endingBalance: endingBalance
    });
}