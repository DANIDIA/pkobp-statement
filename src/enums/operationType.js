/**
 * OperationType enum
 * @enum {number}
 */
export const OperationType = Object.freeze({
    /** For invalid objects or masking */
    None: 0,

    // --- Transfers (outgoing / incoming) ---
    /** 'Przelew z rachunku' */
    TransferOutcoming: 1 << 0,
    /** 'Przelew na konto' */
    TransferIncoming: 1 << 1,
    /** 'Przelew natychmiastowy' */
    InstantTransferOutcoming: 1 << 2,
    // Found 10.12.2025
    /** 'Przelew Natychmiastowy na konto' */
    InstantTransferIncoming: 1 << 3,
    /** 'Przelew Paybynet' */
    PaybynetTransferOutcoming: 1 << 4,
    /** 'Przelew Paybynet na konto' */
    PaybynetTransferIncoming: 1 << 5,
    // TODO: Fix parsing!
    /** 'Przelew zagraniczny i walutowy' */
    ForeignCurrencyTransferIncoming: 1 << 6,

    // --- Phone transfers ---
    /** 'Przelew na telefon przychodz. wew.' */
    IncomingPhoneTransferInternal: 1 << 7,
    /** 'Przelew na telefon przychodz. zew.' */
    IncomingPhoneTransferExternal: 1 << 8,

    // --- Card & web payments / BLIK ---
    /** 'Płatność kartą' */
    CardPayment: 1 << 9,
    /** 'Zwrot płatności kartą' */
    CardPaymentRefund: 1 << 10,
    /** 'Opłata za użytkowanie karty' */
    CardUsageFee: 1 << 11,
    /** 'Płatność web - kod mobilny' */
    WebPaymentBlik: 1 << 12,
    /** 'Zakup w terminalu - kod mobilny' */
    TerminalPurchaseBlik: 1 << 13,
    /** 'Anulowanie zakupu w terminalu - kod mobilny' */
    TerminalPurchaseCancelBlik: 1 << 14,
    /** 'BLIK_CONTACTLESS_PAYMENT_RETURN' */
    BlikContactlessPaymentReturn: 1 << 15,
    /** 'Zwrot w terminalu' */
    TerminalRefund: 1 << 16,

    // --- ATM & Cash ---
    /** 'Wypłata z bankomatu' */
    AtmWithdrawal: 1 << 17,
    /** 'Wypłata w bankomacie - kod mobilny' */
    AtmWithdrawalBlik: 1 << 18,
    /** 'Wpłata gotówki we wpłatomacie' */
    AtmDeposit: 1 << 19,
    /** 'Wpłata BLIKIEM we wpłatomacie' */
    AtmDepositBlik: 1 << 20,
    /** 'Wpłata gotówkowa w kasie' */
    CashRegisterDeposit: 1 << 21,
    /** 'Wypłata gotówkowa z kasy' */
    CashRegisterWithdrawal: 1 << 22,

    // --- Loans, savings, interest ---
    /** 'Spłata kredytu' */
    LoanRepayment: 1 << 23,
    /** 'Autooszczędzanie' */
    AutoSavings: 1 << 24,
    /** 'Naliczenie odsetek' */
    InterestCrediting: 1 << 25,
    /** 'Podatek od odsetek' */
    InterestTax: 1 << 26,
    /** 'Uznanie */
    Crediting: 1 << 27,

    // --- Currency exchange ---
    /** 'WYMIANA W KANTORZE - UZNANIE' */
    CurrencyExchangeCredit: 1 << 28,
    /** 'WYMIANA W KANTORZE - OBCIĄŻENIE' */
    CurrencyExchangeCharge: 1 << 29,

    // --- Fees & charges ---
    /** 'Obciążenie' */
    Charge: 1 << 30,
    /** 'Opłata' */
    Fee: 1 << 31,
})

/**
 * @param {string} text
 * @returns {OperationType}
 */
export function parseOperationType(text)
{
    switch (text) {

        case "Przelew z rachunku":
            return OperationType.TransferOutcoming;
        case "Przelew na konto":
            return OperationType.TransferIncoming;
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
            return OperationType.InterestCrediting;
        case "Wypłata w bankomacie - kod mobilny":
            return OperationType.AtmWithdrawalBlik;
        case "Spłata kredytu":
            return OperationType.LoanRepayment;
        case "Wpłata BLIKIEM we wpłatomacie":
            return OperationType.AtmDepositBlik;
        case "Autooszczędzanie":
            return OperationType.AutoSavings;
        case "WYMIANA W KANTORZE - UZNANIE":
            return OperationType.CurrencyExchangeCredit;
        case "Zwrot płatności kartą":
            return OperationType.CardPaymentRefund;
        case "Opłata":
            return OperationType.Fee;
        case "Wpłata gotówkowa w kasie":
            return OperationType.CashRegisterDeposit;
        case "Wpłata gotówki we wpłatomacie":
            return OperationType.AtmDeposit;
        case "BLIK_CONTACTLESS_PAYMENT_RETURN":
            return OperationType.BlikContactlessPaymentReturn;
        case "Przelew natychmiastowy":
            return OperationType.InstantTransferOutcoming;
        case "Zwrot w terminalu":
            return OperationType.TerminalRefund;
        case "Uznanie":
            return OperationType.Crediting;
        // found 10.12.2025
        case "Przelew Natychmiastowy na konto":
            return OperationType.InstantTransferIncoming;
        case "Wypłata gotówkowa z kasy":
            return OperationType.CashRegisterWithdrawal;
        case "Wypłata z bankomatu":
            return OperationType.AtmWithdrawal;
        case "Anulowanie zakupu w terminalu - kod mobilny":
            return OperationType.TerminalPurchaseCancelBlik;
        case "Przelew zagraniczny i walutowy":
            return OperationType.ForeignCurrencyTransferIncoming;
        case "Opłata za użytkowanie karty":
            return OperationType.CardUsageFee;
        case "WYMIANA W KANTORZE - OBCIĄŻENIE":
            return OperationType.CurrencyExchangeCharge;
        case "Przelew Paybynet":
            return OperationType.PaybynetTransferOutcoming;
        case "Przelew Paybynet na konto":
            return OperationType.PaybynetTransferIncoming;
        case "Podatek od odsetek":
            return OperationType.InterestTax;

        case "":
        case null:
        case undefined:
            return OperationType.None;

        default:
            throw new Error(`Not supported operation type: "${text}"`);
    }
}
