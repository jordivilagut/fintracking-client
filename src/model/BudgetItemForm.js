export class BudgetItemForm {

    constructor(item, start, end) {
        this.amount = item.amount;
        this.description = item.description;
        this.start = start;
        this.end = end;
        this.expenseType = item.expenseType;
        this.operationType = item.operationType;
        this.paymentType = item.paymentType;
        this.recurrence = item.recurrence;
    }
}
