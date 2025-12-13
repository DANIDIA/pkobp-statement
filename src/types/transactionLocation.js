/**
 * Represents a location where transaction occured.
 */
export default class TransactionLocation {
    /**
     * @param {string | null} country 
     *        Name of the country.
     * @param {string | null} city 
     *        Self-explanatory.
     * @param {string | null} street 
     *        Could be a street or a shop's name.
     */
    constructor(country, city, street) {
        /** @type {string | null} Name of the country. */
        this.country = country
        /** @type {string | null} Self-explanatory. */
        this.city = city
        /** @type {string | null} Could be a street or a shop's name. */
        this.street = street
    }
}