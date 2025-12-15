import * as tXml from "txml";
import Transaction from "#types/transaction.js";
import RawTransaction from "#types/rawTransaction.js";
import AccountStatement from "#types/accountStatement.js";
import { decode } from 'html-entities';
import { parseTransaction } from "#src/utils/transaction/parseTransaction.js";

/**
 * Parses raw XML statement data into an account statement object.
 * @param {string} data
 */
export default async function parseStatementXml(data) {
    const parsed = tXml.parse(data)

    const historyTag = parsed[1]

    const searchTag = historyTag.children[0]
    /** @type {import("txml/txml").tNode} */
    const searchAccountTag = searchTag.children[0]
    /** @type {import("txml/txml").tNode} */
    const searchDateTag = searchTag.children[1]

    const accountNumber = searchAccountTag.children[0]
    const sinceDate = new Date(searchDateTag.attributes.since)
    const toDate = new Date(searchDateTag.attributes.to)

    /** @type {Array<Transaction>} */
    const transactions = []

    /** @type {import("txml/txml").tNode} */
    const allTrxsTag = historyTag.children[1]
    for (const trxTag of allTrxsTag.children) {
        /** @type {Array<import("txml/txml").tNode>} */
        const childTags = trxTag.children

        const orderDateTag = childTags.find((node) => node.tagName == "order-date")
        const execDateTag = childTags.find((node) => node.tagName == "exec-date")
        const typeTag = childTags.find((node) => node.tagName == "type")
        const descriptionTag = childTags.find((node) => node.tagName == "description")
        const amountTag = childTags.find((node) => node.tagName == "amount")
        const endingBalanceTag = childTags.find((node) => node.tagName == "ending-balance")

        const orderDate = decode(orderDateTag.children[0], { level: 'xml' })
        const execDate = decode(execDateTag.children[0], { level: 'xml' })
        const type = decode(typeTag.children[0], { level: 'xml' })
        const description = decode(descriptionTag.children[0], { level: 'xml' })
        const amount = decode(amountTag.children[0], { level: 'xml' })
        const amountCurrency = decode(amountTag.attributes.curr, { level: 'xml' })
        const endingBalance = decode(endingBalanceTag.children[0], { level: 'xml' })

        const rawTransaction = new RawTransaction({
            orderDate: orderDate,
            execDate: execDate,
            type: type,
            description: description,
            amount: amount,
            currency: amountCurrency,
            endingBalance: endingBalance
        })
        transactions.push(parseTransaction(rawTransaction))
    }

    return new AccountStatement(accountNumber, sinceDate, toDate, transactions)
}