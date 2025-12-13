export default class Atm {
    /**
     * @param {string | null} id 
     * @param {string | null} name 
     */
    constructor(id, name) {
        /** @type {string | null} */
        this.id = id
        /** @type {string | null} */
        this.name = name
    }
}