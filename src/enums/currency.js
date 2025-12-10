/**
 * Currency enum
 * @enum {number}
 */
export const Currency = Object.freeze({
    /** For invalid objects or masking */
    None: 0,
    /** 'Polish Zlotys' */
    PLN: 1 << 0,
    /** 'United States Dollar' */
    USD: 1 << 1
})

/**
 * @param {string} text
 * @returns {Currency}
 */
export function parseCurrency(text)
{
    switch (text) {

        case "PLN":
            return Currency.PLN
        case "USD":
            return Currency.USD

        case "":
        case null:
        case undefined:
            return Currency.None;

        default:
            throw new Error(`Not supported operation type: "${text}"`);
    }
}
