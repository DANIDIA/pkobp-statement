export default class Receiver
{
    /**
     * @param {string | null} name 
     * @param {string | null} accountNumber 
     * @param {string | null} address 
     */
    constructor(name, accountNumber, address) {
        /** @type {string | null} */
        this.name = name
        /** @type {string | null} */
        this.accountNumber = accountNumber
        /** @type {string | null} */
        this.address = address
    }
    
    hasName() { return this.name != null }
    hasAccountNumber() { return this.accountNumber != null }
    hasAddress() { return this.address != null }
}