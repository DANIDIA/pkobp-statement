export default class LoanTransactionDescription {
    /**
     * @param {string | null} loanId 
     * @param {float | null} principal 
     * @param {float | null} interest
     * @param {float | null} capitalizedInterest
     * @param {float | null} penaltyInterest
     */
    constructor(loanId, principal, interest, capitalizedInterest, penaltyInterest) {
        /** @type {string | null} */
        this.id = loanId
        /** @type {number | null} */
        this.principal = principal
        /** @type {number | null} */
        this.interest = interest
        /** @type {number | null} */
        this.capitalizedInterest = capitalizedInterest
        /** @type {number | null} */
        this.penaltyInterest = penaltyInterest
    }
}