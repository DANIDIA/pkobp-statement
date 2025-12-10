export class LoanTransactionDescription
{
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

    hasLoanId() { return this.loanId != null }
    hasPrincipal() { return this.principal != null }
    hasInterest() { return this.interest != null }
    hasCapitalizedInterest() { return this.capitalizedInterest != null }
    hasPenaltyInterest() { return this.penaltyInterest != null }
}