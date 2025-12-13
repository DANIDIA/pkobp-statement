import { TransactionType } from "#enums/transactionType.js";
import TransactionDescription from "#types/transactionDescription.js";
import Atm from "#types/atm.js";
import Sender from "#types/sender.js";
import Receiver from "#types/receiver.js";
import TransactionLocation from "#types/transactionLocation.js";
import LoanTransactionDescription from "#types/loanTransactionDescription.js";

const keyNames = {
    title: "Tytuł",
    phoneNumber: "Numer telefonu",
    cardNumber: "Numer karty",
    originalAmount: "Oryginalna kwota operacji",
    executionDate: "Data wykonania operacji",
    atmName: "Bankomat",
    identifier: "'Operacja",
    referenceNumber: "Numer referencyjny",
    clientsReferenceIdentifier: "Referencje własne zleceniodawcy",
    senderName: "Nazwa nadawcy",
    senderAccountNumber: "Rachunek nadawcy",
    senderAddress: "Adres nadawcy",
    receiverName: "Nazwa odbiorcy",
    receiverAccountNumber: "Rachunek odbiorcy",
    receiverAddress: "Adres odbiorcy",
    location: "Lokalizacja",
    locationAddress: "Adres",
    locationCity: "Miasto",
    locationCountry: "Kraj",
    loanPrincipal: "KAPITAŁ",
    loanInterest: "ODSETKI",
    loanCapitalizedInterest: "ODSETKI SKAPIT.",
    loanPenaltyInterest: "ODSETKI KARNE",
}

/**
 * @param {string} raw 
 * @param {TransactionType} opType 
 * @returns {TransactionDescription | null}
 */
export default function parseTransactionDescription(raw, opType) {
    if (opType == TransactionType.Crediting) {
        return new TransactionDescription(raw, null, null, null, null, null,
            null, raw, raw, null, null, null, null, null
        )
    }

    let sepUseSpace = true
    // because "KAPITAŁ:", not "KAPITAŁ :"
    if (opType == TransactionType.LoanRepayment)
        sepUseSpace = false

    const sepLen = sepUseSpace ? 2 : 1

    let foundKeys = []
    for (const keyName of Object.values(keyNames)) {
        // build keyname like "Bankomat :"
        let lookKeyName = keyName
        if (sepUseSpace)
            lookKeyName += " "
        lookKeyName += ":"

        const index = raw.indexOf(lookKeyName)

        if (index != -1) {
            foundKeys.push([index, keyName])
        }
    }

    if (foundKeys.length == 0) {
        return new TransactionDescription(raw, null,
            null, null, null, null, null, null, null, null, null, null, null,
            null
        )
    }

    foundKeys = foundKeys.sort(function (a, b) {
        return a[0] - b[0];
    });

    let data = new Map()
    const firstKey = foundKeys.at(0)

    if (firstKey[0] > 0) {
        data.set(null, raw.substring(0, firstKey[0]))
    }
    for (let i = 0; i < foundKeys.length - 1; i++) {
        const [keyIndex, keyName] = foundKeys[i]
        const startIndex = keyIndex + keyName.length + sepLen
        const endIndex = foundKeys[i + 1][0]
        const value = raw.substring(startIndex, endIndex).trim()
        data.set(keyName, value)
    }
    if (foundKeys.length > 0) {
        const [lastKeyIndex, lastKeyName] = foundKeys[foundKeys.length - 1]
        const lastStartIndex = lastKeyIndex + lastKeyName.length + sepLen
        const lastValue = raw.substring(lastStartIndex).trim()
        data.set(lastKeyName, lastValue)
    }

    let title = null
    let phoneNumber = null
    let cardNumber = null
    let originalAmount = null
    let executionDate = null
    let atmId = null
    let atmName = null
    let identifier = null
    let referenceNumber = null
    let clientsReferenceIdentifier = null
    let senderName = null
    let senderAccountNumber = null
    let senderAddress = null
    let receiverName = null
    let receiverAccountNumber = null
    let receiverAddress = null
    let locationAddress = null
    let locationCity = null
    let locationCountry = null
    let loanId = null;
    let loanPrincipal = null
    let loanInterest = null
    let loanCapitalizedInterest = null
    let loanPenaltyInterest = null

    if (data.has(keyNames.title))
        title = data.get(keyNames.title)
    if (data.has(keyNames.phoneNumber))
        phoneNumber = data.get(keyNames.phoneNumber)
    if (data.has(keyNames.cardNumber))
        cardNumber = data.get(keyNames.cardNumber)
    if (data.has(keyNames.originalAmount))
        originalAmount = data.get(keyNames.originalAmount)

    if (data.has(keyNames.executionDate))
        executionDate = new Date(data.get(keyNames.executionDate))

    // atm
    if (data.has(keyNames.atmName))
        atmName = data.get(keyNames.atmName)
    if (opType == TransactionType.AtmDeposit || opType == TransactionType.AtmDepositBlik
        || opType == TransactionType.AtmWithdrawalBlik || opType == TransactionType.AtmWithdrawal
    )
        if (data.has(null)) {
            atmId = data.get(null)
        }

    // identifier
    if (data.has(keyNames.identifier))
        identifier = data.get(keyNames.identifier)
    else if (
        opType == TransactionType.BlikContactlessPaymentReturn ||
        opType == TransactionType.CardPayment ||
        opType == TransactionType.CardPaymentRefund ||
        opType == TransactionType.TerminalPurchaseBlik ||
        opType == TransactionType.TerminalRefund) {
        if (data.has(null)) {
            identifier = data.get(null)
        }
    }

    // reference number
    if (data.has(keyNames.referenceNumber))
        referenceNumber = data.get(keyNames.referenceNumber)
    else
        referenceNumber = identifier

    // client reference identifier
    if (data.has(keyNames.clientsReferenceIdentifier))
        clientsReferenceIdentifier = data.get(keyNames.clientsReferenceIdentifier)

    // sender
    if (data.has(keyNames.senderName))
        senderName = data.get(keyNames.senderName)
    if (data.has(keyNames.senderAddress))
        senderAddress = data.get(keyNames.senderAddress)
    if (data.has(keyNames.senderAccountNumber))
        senderAccountNumber = data.get(keyNames.senderAccountNumber)

    // receiver
    if (data.has(keyNames.receiverName))
        receiverName = data.get(keyNames.receiverName)
    if (data.has(keyNames.receiverAddress))
        receiverAddress = data.get(keyNames.receiverAddress)
    if (data.has(keyNames.receiverAccountNumber))
        receiverAccountNumber = data.get(keyNames.receiverAccountNumber)

    if (data.has(keyNames.locationAddress))
        locationAddress = data.get(keyNames.locationAddress)
    if (data.has(keyNames.locationCity))
        locationCity = data.get(keyNames.locationCity)
    if (data.has(keyNames.locationCountry))
        locationCountry = data.get(keyNames.locationCountry)

    if (data.has(keyNames.loanCapitalizedInterest))
        loanCapitalizedInterest = parseFloat(data.get(keyNames.loanCapitalizedInterest))
    if (data.has(keyNames.loanInterest))
        loanInterest = parseFloat(data.get(keyNames.loanInterest))
    if (data.has(keyNames.loanPrincipal))
        loanPrincipal = parseFloat(data.get(keyNames.loanPrincipal))
    if (data.has(keyNames.loanPenaltyInterest)) {
        let splitted = data.get(keyNames.loanPenaltyInterest).split(" ")
        loanPenaltyInterest = parseFloat(splitted[0])
        loanId = splitted[1]
    }



    let atm = null;
    let sender = null;
    let receiver = null;
    let location = null;
    let loan = null;

    if (atmId || atmName)
        atm = new Atm(atmId, atmName)
    if (senderName || senderAccountNumber || senderAddress)
        sender = new Sender(senderName, senderAccountNumber, senderAddress)
    if (receiverName || receiverAccountNumber || receiverAddress)
        receiver = new Receiver(receiverName, receiverAccountNumber, receiverAddress)
    if (data.has(keyNames.location))
        location = new TransactionLocation(locationCountry, locationCity, locationAddress)
    if (loanId || loanPrincipal || loanInterest || loanCapitalizedInterest || loanPenaltyInterest)
        loan = new LoanTransactionDescription(loanId, loanPrincipal, loanInterest, loanCapitalizedInterest, loanPenaltyInterest)

    return new TransactionDescription(raw, title, phoneNumber, cardNumber, originalAmount, executionDate, atm, identifier, referenceNumber, clientsReferenceIdentifier, sender, receiver, location, loan)

    // throw error in the future
} 