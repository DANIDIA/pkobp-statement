import { CurrencyCode } from "#src/enums/currencyCode.js";

/**
 * Parses a currency code string into a CurrencyCode enum value.
 * 
 * If the input is empty, null, or undefined - it returns CurrencyCode.Invalid.
 * If the currency is not recognized, sets to CurrencyCode.Unsupported.
 * 
 * @param {string | null | undefined} text
 * @returns {CurrencyCode}
 */
export default function parseCurrencyCode(text) {
    if (!text) {
        return CurrencyCode.Invalid;
    }
    const typeMap = {
        "PLN": CurrencyCode.PLN,
        "USD": CurrencyCode.USD
    };
    
    return typeMap[text] ?? CurrencyCode.Unsupported;
}