/**
 * Represents loan-related transaction details.
 */
export default class LoanTransactionDescription {
    /**
     * @typedef {Object} LoanTransactionDescriptionParams
     * @property {string | undefined} loanId
     * Identifier of the loan this transaction belongs to.
     * @property {number | undefined} principal
     * Amount applied to the loan principal.
     * @property {number | undefined} interest
     * Amount of regular interest charged or paid.
     * @property {number | undefined} capitalizedInterest
     * Interest amount capitalized into the principal.
     * @property {number | undefined} penaltyInterest
     * Penalty or overdue interest charged.
     */

    /**
     * @param {LoanTransactionDescriptionParams} params
     */
    constructor(params) {
        /** @type {string | undefined} Identifier of the loan this transaction belongs to. */
        this.loanId = params.loanId
        /** @type {number | undefined} Amount applied to the loan principal. */
        this.principal = params.principal
        /** @type {number | undefined} Amount of regular interest charged or paid. */
        this.interest = params.interest
        /** @type {number | undefined} Interest amount capitalized into the principal. */
        this.capitalizedInterest = params.capitalizedInterest
        /** @type {number | undefined} Penalty or overdue interest charged. */
        this.penaltyInterest = params.penaltyInterest
    }
}