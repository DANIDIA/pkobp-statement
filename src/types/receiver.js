export default class Receiver {
    /**
     * @param {string | undefined} name 
     * @param {string | undefined} accountNumber 
     * @param {string | undefined} address 
     */
    constructor(name, accountNumber, address) {
        /** @type {string | undefined} */
        this.name = name
        /** @type {string | undefined} */
        this.accountNumber = accountNumber
        /** @type {string | undefined} */
        this.address = address
    }
}