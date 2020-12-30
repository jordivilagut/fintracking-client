export class TransactionForm {

    constructor(amount, description, expenseType, operationType) {
        this.amount = amount;
        this.description = description;
        this.expenseType = expenseType;
        this.operationType = operationType;
    }
}
