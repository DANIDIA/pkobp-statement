export default class TransactionLocation {
    /**
     * @param {string | null} country 
     * @param {string | null} city 
     * @param {string | null} street 
     */
    constructor(country, city, street) {
        /** @type {string | null} */
        this.country = country
        /** @type {string | null} */
        this.city = city
        /** @type {string | null} */
        this.street = street
    }
    hasCountry() { return this.country != null }
    hasCity() { return this.city != null }
    hasStreet() { return this.street != null }
}