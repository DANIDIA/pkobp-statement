import * as tXml from "txml";
import { Operation } from "../types/operation.js";
import { RawOperation } from "../types/rawOperation.js";
import { AccountStatement } from "../types/accountStatement.js";
import { decode } from 'html-entities';

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
        
        const orderDate = decode(orderDateTag.children[0], {level: 'xml'})
        const execDate = decode(execDateTag.children[0], {level: 'xml'})
        const type = decode(typeTag.children[0], {level: 'xml'})
        const description = decode(descriptionTag.children[0], {level: 'xml'})
        const amount = decode(amountTag.children[0], {level: 'xml'})
        const amountCurrency = decode(amountTag.attributes.curr, {level: 'xml'})
        const endingBalance = decode(endingBalanceTag.children[0], {level: 'xml'})

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