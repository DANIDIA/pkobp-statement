/**
 * Represents supported currency identifiers used in the system.
 * 
 * @enum {number}
 */
export const CurrencyCode = Object.freeze({
    /** Invalid or uninitialized currency value. */
    Invalid: -1,
    /** Currency explicitly marked as unsupported. */
    Unsupported: 0,
    /** Polish Złoty (PLN). */
    PLN: 1,
    /** United States Dollar (USD). */
    USD: 2
})