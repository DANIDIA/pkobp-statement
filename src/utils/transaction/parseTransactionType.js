import { TransactionType } from "#enums/transactionType.js";

/**
 * Parses a transaction name string into a TransactionType enum value.
 * 
 * If the input is empty, null, or undefined - it returns TransactionType.Invalid.
 * If the transaction type is not recognized, sets to TransactionType.Unsupported.
 * 
 * @param {string | null | undefined} text
 * @returns {TransactionType}
 */
export default function parseTransactionType(text) {
    if (!text) {
        return TransactionType.Invalid;
    }

    const typeMap = {
        "Przelew z rachunku": TransactionType.TransferOutgoing,
        "Przelew na konto": TransactionType.TransferIncoming,
        "Płatność kartą": TransactionType.CardPayment,
        "Obciążenie": TransactionType.Charge,
        "Zakup w terminalu - kod mobilny": TransactionType.TerminalPurchaseBlik,
        "Przelew na telefon przychodz. wew.": TransactionType.PhoneTransferInternal,
        "Przelew na telefon przychodz. zew.": TransactionType.PhoneTransferExternal,
        "Płatność web - kod mobilny": TransactionType.WebPaymentBlik,
        "Naliczenie odsetek": TransactionType.InterestCrediting,
        "Wypłata w bankomacie - kod mobilny": TransactionType.AtmWithdrawalBlik,
        "Spłata kredytu": TransactionType.LoanRepayment,
        "Wpłata BLIKIEM we wpłatomacie": TransactionType.AtmDepositBlik,
        "Autooszczędzanie": TransactionType.AutoSavings,
        "WYMIANA W KANTORZE - UZNANIE": TransactionType.CurrencyExchangeCredit,
        "Zwrot płatności kartą": TransactionType.CardPaymentRefund,
        "Opłata": TransactionType.Fee,
        "Wpłata gotówkowa w kasie": TransactionType.CashRegisterDeposit,
        "Wpłata gotówki we wpłatomacie": TransactionType.AtmDeposit,
        "BLIK_CONTACTLESS_PAYMENT_RETURN": TransactionType.BlikContactlessPaymentReturn,
        "Przelew natychmiastowy": TransactionType.InstantTransferOutgoing,
        "Zwrot w terminalu": TransactionType.TerminalRefund,
        "Uznanie": TransactionType.Crediting,
        // found 10.12.2025
        "Przelew Natychmiastowy na konto": TransactionType.InstantTransferIncoming,
        "Wypłata gotówkowa z kasy": TransactionType.CashRegisterWithdrawal,
        "Wypłata z bankomatu": TransactionType.AtmWithdrawal,
        "Anulowanie zakupu w terminalu - kod mobilny": TransactionType.TerminalPurchaseCancelBlik,
        "Przelew zagraniczny i walutowy": TransactionType.ForeignCurrencyTransferIncoming,
        "Opłata za użytkowanie karty": TransactionType.CardUsageFee,
        "WYMIANA W KANTORZE - OBCIĄŻENIE": TransactionType.CurrencyExchangeCharge,
        "Przelew Paybynet": TransactionType.PaybynetTransferOutgoing,
        "Przelew Paybynet na konto": TransactionType.PaybynetTransferIncoming,
        "Podatek od odsetek": TransactionType.InterestTax,
        // found 12.12.2025
        "Korekta odsetek": TransactionType.InterestAdjustment,
        "Korekta podatku": TransactionType.TaxAdjustment,
        "Korekta": TransactionType.Adjustment
    };
    
    return typeMap[text] ?? TransactionType.Unsupported;
}