/**
 * OperationType enum
 * @enum {number}
 */
export const OperationType = Object.freeze({
    /** For invalid objects or masking */
    None: 0,
    /** 'Przelew z rachunku' */
    TransferFromAccount: 1 << 0,
    /** 'Przelew na konto' */
    TransferToAccount: 1 << 1,
    /** 'Płatność kartą' */
    CardPayment: 1 << 2,
    /** 'Obciążenie' */
    Charge: 1 << 3,
    /** 'Zakup w terminalu - kod mobilny' */
    TerminalPurchaseBlik: 1 << 4,
    /** 'Przelew na telefon przychodz. wew.' */
    IncomingPhoneTransferInternal: 1 << 5,
    /** 'Przelew na telefon przychodz. zew.' */
    IncomingPhoneTransferExternal: 1 << 6,
    /** 'Płatność web - kod mobilny' */
    WebPaymentBlik: 1 << 7,
    /** 'Naliczenie odsetek' */
    InterestCredited: 1 << 8,
    /** 'Wypłata w bankomacie - kod mobilny' */
    AtmWithdrawalBlik: 1 << 9,
    /** 'Spłata kredytu' */
    LoanRepayment: 1 << 10,
    /** 'Wpłata BLIKIEM we wpłatomacie' */
    AtmDepositBlik: 1 << 11,
    /** 'Autooszczędzanie' */
    AutoSavings: 1 << 12,
    /** 'WYMIANA W KANTORZE - UZNANIE' */
    CurrencyExchange: 1 << 13,
    /** 'Zwrot płatności kartą' */
    CardPaymentRefund: 1 << 14,
    /** 'Opłata' */
    Fee: 1 << 15,
    /** 'Wpłata gotówkowa w kasie' */
    CashDepositTeller: 1 << 16,
    /** 'Wpłata gotówki we wpłatomacie' */
    AtmDeposit: 1 << 17,
    /** 'BLIK_CONTACTLESS_PAYMENT_RETURN' */
    BlikContactlessPaymentReturn: 1 << 18,
    /** 'Przelew natychmiastowy' */
    InstantTransferToAccount: 1 << 19,
    /** 'Zwrot w terminalu' */
    TerminalRefund: 1 << 20,
    /** 'Uznanie */
    Crediting: 1 << 21
})

/**
 * @param {string} text
 * @returns {OperationType}
 */
export function parseOperationType(text)
{
    switch (text) {

        case "Przelew z rachunku":
            return OperationType.TransferFromAccount;
        case "Przelew na konto":
            return OperationType.TransferToAccount;
        case "Płatność kartą":
            return OperationType.CardPayment;
        case "Obciążenie":
            return OperationType.Charge;
        case "Zakup w terminalu - kod mobilny":
            return OperationType.TerminalPurchaseBlik;
        case "Przelew na telefon przychodz. wew.":
            return OperationType.IncomingPhoneTransferInternal;
        case "Przelew na telefon przychodz. zew.":
            return OperationType.IncomingPhoneTransferExternal;
        case "Płatność web - kod mobilny":
            return OperationType.WebPaymentBlik;
        case "Naliczenie odsetek":
            return OperationType.InterestCredited;
        case "Wypłata w bankomacie - kod mobilny":
            return OperationType.AtmWithdrawalBlik;
        case "Spłata kredytu":
            return OperationType.LoanRepayment;
        case "Wpłata BLIKIEM we wpłatomacie":
            return OperationType.AtmDepositBlik;
        case "Autooszczędzanie":
            return OperationType.AutoSavings;
        case "WYMIANA W KANTORZE - UZNANIE":
            return OperationType.CurrencyExchange;
        case "Zwrot płatności kartą":
            return OperationType.CardPaymentRefund;
        case "Opłata":
            return OperationType.Fee;
        case "Wpłata gotówkowa w kasie":
            return OperationType.CashDepositTeller;
        case "Wpłata gotówki we wpłatomacie":
            return OperationType.AtmDeposit;
        case "BLIK_CONTACTLESS_PAYMENT_RETURN":
            return OperationType.BlikContactlessPaymentReturn;
        case "Przelew natychmiastowy":
            return OperationType.InstantTransferToAccount;
        case "Zwrot w terminalu":
            return OperationType.TerminalRefund;
        case "Uznanie":
            return OperationType.Crediting;

        case "":
        case null:
        case undefined:
            return OperationType.None;

        default:
            throw new Error(`Not supported operation type: "${text}"`);
    }
}
