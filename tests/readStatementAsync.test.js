import test from "node:test"
import assert from "node:assert/strict"
import { Atm, CurrencyCode, Transaction, TransactionDescription, TransactionLocation, TransactionType, readStatementAsync } from "../src/index.js"

test("readStatementAsync.XML.atmdeposit", async () => {

    const statement = await readStatementAsync("./tests/fixtures/filtered-statements/atmdeposit.xml", "xml")
    const referenceOp = new Transaction({
        orderDate: new Date("2025-09-01"),
        execDate: new Date("2025-09-01"),
        type: TransactionType.AtmDeposit,
        description: new TransactionDescription({
            raw: 'PKO BP 12345678S1LD1405W200H 7140 Lokalizacja : Miasto : LODZ Kraj : POLSKA Data wykonania operacji : 2025-09-01 Oryginalna kwota operacji : 1000,00 PLN Numer karty : 123123******1234',
            cardNumber: '123123******1234',
            originalAmount: '1000,00 PLN',
            executionDate: new Date("2025-09-01"),
            atm: new Atm({ id: 'PKO BP 12345678S1LD1405W200H 7140 '}),
            location: new TransactionLocation({ country: 'POLSKA', city: 'LODZ' }),
        }),
        amount: 1000,
        currency: CurrencyCode.PLN,
        endingBalance: 1000
    })
    const firstOp = statement.transactions[0]
    assert.deepEqual(firstOp, referenceOp)
})