import { TransactionType } from "#src/enums/transactionType.js";

/**
 * @param {string} text
 * @returns {TransactionType}
 */
export default function parseTransactionType(text)
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
        // found 12.12.2025
        case "Korekta odsetek":
            return TransactionType.InterestAdjustment;
        case "Korekta podatku":
            return TransactionType.TaxAdjustment;
        case "Korekta":
            return TransactionType.Adjustment;

        case "":
        case null:
        case undefined:
            return TransactionType.None;

        default:
            throw new Error(`Not supported transaction type: "${text}"`);
    }
}
