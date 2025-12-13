/**
 * CurrencyType enum
 * @enum {number}
 */
export const CurrencyType = Object.freeze({
    /** For invalid objects or masking */
    None: 0,
    /** 'Polish Zlotys' */
    PLN: 1,
    /** 'United States Dollar' */
    USD: 2
})

/**
 * @param {string} text
 * @returns {CurrencyType}
 */
export function parseCurrency(text)
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
