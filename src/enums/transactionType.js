/**
 * Represents normalized transaction categories parsed from bank history.
 * 
 * @enum {number}
 */
export const TransactionType = Object.freeze({
    /** Invalid or uninitialized transcation type value */
    Invalid: -1,
    /** Type explicitly marked as unsupported */
    Unsupported: 0,

    // --- Transfers (outgoing / incoming) ---
    /** Outgoing bank transfer */
    TransferOutgoing: 1,
    /** Incoming bank transfer */
    TransferIncoming: 2,
    /** Outgoing instant transfer */
    InstantTransferOutgoing: 3,

    // Found 10.12.2025
    /** Incoming instant transfer */
    InstantTransferIncoming: 4,
    /** Outgoing Paybynet transfer */
    PaybynetTransferOutgoing: 5,
    /** Incoming Paybynet transfer */
    PaybynetTransferIncoming: 6,
    // TODO: Fix parsing!
    /** Incoming foreign or currency transfer */
    ForeignCurrencyTransferIncoming: 7,

    // --- Phone transfers ---
    /** Incoming (PKO-PKO) phone transfer */
    PhoneTransferInternal: 8,
    /** Incoming (PKO-outher bank) phone transfer */
    PhoneTransferExternal: 9,

    // --- Card & web payments / BLIK ---
    /** Card payment */
    CardPayment: 10,
    /** Card payment refund */
    CardPaymentRefund: 11,
    /** Card usage or maintenance fee */
    CardUsageFee: 12,
    /** BLIK web payment */
    WebPaymentBlik: 13,
    /** BLIK terminal purchase */
    TerminalPurchaseBlik: 14,
    /** Cancelled BLIK terminal purchase */
    TerminalPurchaseCancelBlik: 15,
    /** Returned BLIK contactless payment */
    BlikContactlessPaymentReturn: 16,
    /** Refund processed at a terminal */
    TerminalRefund: 17,

    // --- ATM & Cash ---
    /** Cash withdrawal from ATM */
    AtmWithdrawal: 18,
    /** BLIK cash withdrawal from ATM */
    AtmWithdrawalBlik: 19,
    /** Cash deposit at ATM */
    AtmDeposit: 20,
    /** BLIK cash deposit at ATM */
    AtmDepositBlik: 21,
    /** Cash deposit at bank counter */
    CashRegisterDeposit: 22,
    /** Cash withdrawal at bank counter */
    CashRegisterWithdrawal: 23,

    // --- Loans, savings, interest ---
    /** Loan or credit repayment */
    LoanRepayment: 24,
    /** Automatic savings transfer */
    AutoSavings: 25,
    /** Interest credited to account */
    InterestCrediting: 26,
    /** Tax charged on interest */
    InterestTax: 27,
    /** Generic account credit */
    Crediting: 28,

    // --- Currency exchange ---
    /** Currency exchange credit */
    CurrencyExchangeCredit: 29,
    /** Currency exchange charge */
    CurrencyExchangeCharge: 30,

    // --- Fees & charges ---
    /** Generic account charge or debit (needs more inspection) */
    Charge: 31,
    /** Fee charged by the bank */
    Fee: 32,

    // --- Adjustements ---
    /** Interest correction */
    InterestAdjustment: 33,
    /** Tax correction */
    TaxAdjustment: 34,
    /** Generic correction or adjustment */
    Adjustment: 35
})