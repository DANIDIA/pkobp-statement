import * as tXml from "txml";
import { Operation } from "../types/operation.js";
import { RawOperation } from "../types/rawOperation.js";
import { AccountStatement } from "../types/accountStatement.js";

/**
 * @param {string} data
 */
export default async function parseStatementXml(data)
{
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

    /** @type {Array<Operation>} */
    const operations = []

    /** @type {import("txml/txml").tNode} */
    const allOpsTag = historyTag.children[1]
    for(const opTag of allOpsTag.children)
    {
    /** @type {Array<import("txml/txml").tNode>} */
        const childTags = opTag.children

        const orderDateTag = childTags.find((node) => node.tagName == "order-date")
        const execDateTag = childTags.find((node) => node.tagName == "exec-date")
        const typeTag = childTags.find((node) => node.tagName == "type")
        const descriptionTag = childTags.find((node) => node.tagName == "description")
        const amountTag = childTags.find((node) => node.tagName == "amount")
        const endingBalanceTag = childTags.find((node) => node.tagName == "ending-balance")
        
        const orderDate = orderDateTag.children[0]
        const execDate = execDateTag.children[0]
        const type = typeTag.children[0]
        const description = descriptionTag.children[0]
        const amount = amountTag.children[0]
        const amountCurrency = amountTag.attributes.curr
        const endingBalance = endingBalanceTag.children[0]

        const rawOperation = Object.assign(new RawOperation(), {
            orderDate: orderDate,
            executionDate: execDate,
            type: type,
            description: description,
            amount: amount,
            amountCurrency: amountCurrency,
            endingBalance: endingBalance
        })
        operations.push(Operation.parse(rawOperation))
    }

    return new AccountStatement(accountNumber, sinceDate, toDate, operations)
}