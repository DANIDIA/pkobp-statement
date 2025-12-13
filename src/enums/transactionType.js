/**
 * TransactionType enum
 * @enum {number}
 */
export const TransactionType = Object.freeze({
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
 * @returns {TransactionType}
 */
export function parseTransactionType(text)
{
    switch (text) {

        case "Przelew z rachunku":
            return TransactionType.TransferOutcoming;
        case "Przelew na konto":
            return TransactionType.TransferIncoming;
        case "Płatność kartą":
            return TransactionType.CardPayment;
        case "Obciążenie":
            return TransactionType.Charge;
        case "Zakup w terminalu - kod mobilny":
            return TransactionType.TerminalPurchaseBlik;
        case "Przelew na telefon przychodz. wew.":
            return TransactionType.IncomingPhoneTransferInternal;
        case "Przelew na telefon przychodz. zew.":
            return TransactionType.IncomingPhoneTransferExternal;
        case "Płatność web - kod mobilny":
            return TransactionType.WebPaymentBlik;
        case "Naliczenie odsetek":
            return TransactionType.InterestCrediting;
        case "Wypłata w bankomacie - kod mobilny":
            return TransactionType.AtmWithdrawalBlik;
        case "Spłata kredytu":
            return TransactionType.LoanRepayment;
        case "Wpłata BLIKIEM we wpłatomacie":
            return TransactionType.AtmDepositBlik;
        case "Autooszczędzanie":
            return TransactionType.AutoSavings;
        case "WYMIANA W KANTORZE - UZNANIE":
            return TransactionType.CurrencyExchangeCredit;
        case "Zwrot płatności kartą":
            return TransactionType.CardPaymentRefund;
        case "Opłata":
            return TransactionType.Fee;
        case "Wpłata gotówkowa w kasie":
            return TransactionType.CashRegisterDeposit;
        case "Wpłata gotówki we wpłatomacie":
            return TransactionType.AtmDeposit;
        case "BLIK_CONTACTLESS_PAYMENT_RETURN":
            return TransactionType.BlikContactlessPaymentReturn;
        case "Przelew natychmiastowy":
            return TransactionType.InstantTransferOutcoming;
        case "Zwrot w terminalu":
            return TransactionType.TerminalRefund;
        case "Uznanie":
            return TransactionType.Crediting;
        // found 10.12.2025
        case "Przelew Natychmiastowy na konto":
            return TransactionType.InstantTransferIncoming;
        case "Wypłata gotówkowa z kasy":
            return TransactionType.CashRegisterWithdrawal;
        case "Wypłata z bankomatu":
            return TransactionType.AtmWithdrawal;
        case "Anulowanie zakupu w terminalu - kod mobilny":
            return TransactionType.TerminalPurchaseCancelBlik;
        case "Przelew zagraniczny i walutowy":
            return TransactionType.ForeignCurrencyTransferIncoming;
        case "Opłata za użytkowanie karty":
            return TransactionType.CardUsageFee;
        case "WYMIANA W KANTORZE - OBCIĄŻENIE":
            return TransactionType.CurrencyExchangeCharge;
        case "Przelew Paybynet":
            return TransactionType.PaybynetTransferOutcoming;
        case "Przelew Paybynet na konto":
            return TransactionType.PaybynetTransferIncoming;
        case "Podatek od odsetek":
            return TransactionType.InterestTax;

        case "":
        case null:
        case undefined:
            return TransactionType.None;

        default:
            throw new Error(`Not supported transaction type: "${text}"`);
    }
}
