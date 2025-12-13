/**
 * TransactionType enum
 * @enum {number}
 */
export const TransactionType = Object.freeze({
    /** For invalid objects or masking */
    None: 0,

    // --- Transfers (outgoing / incoming) ---
    /** 'Przelew z rachunku' */
    TransferOutcoming: 1,
    /** 'Przelew na konto' */
    TransferIncoming: 2,
    /** 'Przelew natychmiastowy' */
    InstantTransferOutcoming: 3,
    // Found 10.12.2025
    /** 'Przelew Natychmiastowy na konto' */
    InstantTransferIncoming: 4,
    /** 'Przelew Paybynet' */
    PaybynetTransferOutcoming: 5,
    /** 'Przelew Paybynet na konto' */
    PaybynetTransferIncoming: 6,
    // TODO: Fix parsing!
    /** 'Przelew zagraniczny i walutowy' */
    ForeignCurrencyTransferIncoming: 7,

    // --- Phone transfers ---
    /** 'Przelew na telefon przychodz. wew.' */
    IncomingPhoneTransferInternal: 8,
    /** 'Przelew na telefon przychodz. zew.' */
    IncomingPhoneTransferExternal: 9,

    // --- Card & web payments / BLIK ---
    /** 'Płatność kartą' */
    CardPayment: 10,
    /** 'Zwrot płatności kartą' */
    CardPaymentRefund: 11,
    /** 'Opłata za użytkowanie karty' */
    CardUsageFee: 12,
    /** 'Płatność web - kod mobilny' */
    WebPaymentBlik: 13,
    /** 'Zakup w terminalu - kod mobilny' */
    TerminalPurchaseBlik: 14,
    /** 'Anulowanie zakupu w terminalu - kod mobilny' */
    TerminalPurchaseCancelBlik: 15,
    /** 'BLIK_CONTACTLESS_PAYMENT_RETURN' */
    BlikContactlessPaymentReturn: 16,
    /** 'Zwrot w terminalu' */
    TerminalRefund: 17,

    // --- ATM & Cash ---
    /** 'Wypłata z bankomatu' */
    AtmWithdrawal: 18,
    /** 'Wypłata w bankomacie - kod mobilny' */
    AtmWithdrawalBlik: 19,
    /** 'Wpłata gotówki we wpłatomacie' */
    AtmDeposit: 20,
    /** 'Wpłata BLIKIEM we wpłatomacie' */
    AtmDepositBlik: 21,
    /** 'Wpłata gotówkowa w kasie' */
    CashRegisterDeposit: 22,
    /** 'Wypłata gotówkowa z kasy' */
    CashRegisterWithdrawal: 23,

    // --- Loans, savings, interest ---
    /** 'Spłata kredytu' */
    LoanRepayment: 24,
    /** 'Autooszczędzanie' */
    AutoSavings: 25,
    /** 'Naliczenie odsetek' */
    InterestCrediting: 26,
    /** 'Podatek od odsetek' */
    InterestTax: 27,
    /** 'Uznanie */
    Crediting: 28,

    // --- Currency exchange ---
    /** 'WYMIANA W KANTORZE - UZNANIE' */
    CurrencyExchangeCredit: 29,
    /** 'WYMIANA W KANTORZE - OBCIĄŻENIE' */
    CurrencyExchangeCharge: 30,

    // --- Fees & charges ---
    /** 'Obciążenie' */
    Charge: 31,
    /** 'Opłata' */
    Fee: 32,

    // --- Adjustements ---
    /** 'Korekta odsetek' */
    InterestAdjustment: 33,
    /** 'Korekta podatku' */
    TaxAdjustment: 34,
    /** 'Korekta' */
    Adjustment: 35
})