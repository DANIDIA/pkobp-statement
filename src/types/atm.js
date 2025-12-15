/**
 * Represents ATM machine.
 */
export default class Atm {
    /**
     * @typedef {Object} AtmParams
     * @property {string | undefined} id
     * Unique identifier of an ATM machine.
     * @property {string | undefined} name
     * Alias name of an ATM machine.
     */

    /**
     * @param {AtmParams} params
     */
    constructor(params) {
        /** @type {string | undefined} Unique identifier of an ATM machine. */
        this.id = params.id;
        /** @type {string | undefined} Alias name of an ATM machine. */
        this.name = params.name;
    }
}