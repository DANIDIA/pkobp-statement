/**
 * Represents ATM machine.
 */
export default class Atm {
    /**
     * @param {string | null} id 
     *        Unique identifier of an ATM machine.
     * @param {string | null} name 
     *        Alias name of an ATM machine.
     */
    constructor(id, name) {
        /** @type {string | null} Unique identifier of an ATM machine. */
        this.id = id
        /** @type {string | null} Alias name of an ATM machine. */
        this.name = name
    }
}