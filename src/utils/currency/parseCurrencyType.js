import { CurrencyType } from "#src/enums/currencyType.js";

/**
 * @param {string} text
 * @returns {CurrencyType}
 */
export default function parseCurrencyType(text)
{
    switch (text) {

        case "PLN":
            return CurrencyType.PLN
        case "USD":
            return CurrencyType.USD

        case "":
        case null:
        case undefined:
            return CurrencyType.None;

        default:
            throw new Error(`Not supported transaction type: "${text}"`);
    }
}