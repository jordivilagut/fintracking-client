export class TransactionForm {

    constructor(amount, description, expenseType, operationType, date) {
        this.amount = amount;
        this.description = description;
        this.expenseType = expenseType;
        this.operationType = operationType;
        this.date = date;
    }
}
