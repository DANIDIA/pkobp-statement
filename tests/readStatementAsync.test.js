import test from "node:test"
import assert from "node:assert/strict"
import { Atm, CurrencyCode, Transaction, TransactionDescription, TransactionLocation, TransactionType, readStatementAsync } from "../src/index.js"

test("readStatementAsync.XML.atmdeposit", async () => {

    const statement = await readStatementAsync("./tests/fixtures/filtered-statements/atmdeposit.xml", "xml")
    const referenceOp = new Transaction(
        new Date("2025-09-01"),
        new Date("2025-09-01"),
        TransactionType.AtmDeposit,
        new TransactionDescription(
            'PKO BP 12345678S1LD1405W200H 7140 Lokalizacja : Miasto : LODZ Kraj : POLSKA Data wykonania operacji : 2025-09-01 Oryginalna kwota operacji : 1000,00 PLN Numer karty : 123123******1234',
            null,
            null,
            '123123******1234',
            '1000,00 PLN',
            new Date("2025-09-01"),
            new Atm('PKO BP 12345678S1LD1405W200H 7140 ', null),
            null,
            null,
            null,
            null,
            null,
            new TransactionLocation('POLSKA', 'LODZ', null),
            null
        ),
        1000,
        CurrencyCode.PLN,
        1000
    )
    const firstOp = statement.transactions[0]
    assert.deepEqual(referenceOp, firstOp)
})