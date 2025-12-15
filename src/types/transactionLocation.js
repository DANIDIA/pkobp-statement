/**
 * Represents a location where transaction occured.
 */
export default class TransactionLocation {
    /**
     * @typedef {Object} TransactionLocationParams
     * @property {string | undefined} country 
     * Name of the country.
     * @property {string | undefined} city 
     * Self-explanatory.
     * @property {string | undefined} street 
     * Could be a street or a shop's name.
     */

    /**
     * @param {TransactionLocationParams} params
     */
    constructor(params) {
        /** @type {string | undefined} Name of the country. */
        this.country = params.country
        /** @type {string | undefined} Self-explanatory. */
        this.city = params.city
        /** @type {string | undefined} Could be a street or a shop's name. */
        this.street = params.street
    }
}