export class BudgetItemForm {

    constructor(amount, description, start, end, expenseType, operationType, paymentType, paymentRecurrence) {
        this.amount = amount;
        this.description = description;
        this.start = start;
        this.end = end;
        this.expenseType = expenseType;
        this.operationType = operationType;
        this.paymentType = paymentType;
        this.paymentRecurrence = paymentRecurrence;
    }
}
