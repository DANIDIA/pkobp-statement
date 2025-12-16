export default class TransactionParticipant {
    /**
     * @typedef {Object} TransactionParticipantParams
     * @property {string | null} name
     * Name (or alias) of the participant.
     * @property {string | null} accountNumber
     * Account number of the participant.
     * @property {string | null} address
     * Full address of the participant.
     */
    
    /**
     * @param {TransactionParticipantParams} params
     */
    constructor(params) {
        /** @type {string | null} Name (or alias) of the participant. */
        this.name = params.name
        /** @type {string | null} Account number of the participant. */
        this.accountNumber = params.accountNumber
        /** @type {string | null} Full address of the participant. */
        this.address = params.address
    }
}