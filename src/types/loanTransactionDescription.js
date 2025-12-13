/**
 * Represents loan-related transaction details.
 */
export default class LoanTransactionDescription {
    /**
     * @param {string | null} loanId 
     *        Identifier of the loan this transaction belongs to.
     * @param {float | null} principal 
     *        Amount applied to the loan principal.
     * @param {float | null} interest
     *        Amount of regular interest charged or paid.
     * @param {float | null} capitalizedInterest
     *        Interest amount capitalized into the principal.
     * @param {float | null} penaltyInterest
     *        Penalty or overdue interest charged.
     */
    constructor(loanId, principal, interest, capitalizedInterest, penaltyInterest) {
        /** @type {string | null} Identifier of the loan this transaction belongs to. */
        this.id = loanId
        /** @type {number | null} Amount applied to the loan principal. */
        this.principal = principal
        /** @type {number | null} Amount of regular interest charged or paid. */
        this.interest = interest
        /** @type {number | null} Interest amount capitalized into the principal. */
        this.capitalizedInterest = capitalizedInterest
        /** @type {number | null} Penalty or overdue interest charged. */
        this.penaltyInterest = penaltyInterest
    }
}