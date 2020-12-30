export class TransactionsFilter {

    constructor(from, to, skip, limit, userId, expenseType, minAmount, maxAmount) {
        this.from = from;
        this.to = to;
        this.skip = skip;
        this.limit = limit;
        this.expenseType = expenseType;
        this.minAmount = minAmount;
        this.maxAmount = maxAmount;
    }
}
