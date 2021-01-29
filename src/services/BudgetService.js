import {TransactionsFilter} from "../model/TransactionsFilter";
import {DateUtils} from "../utils/DateUtils";
import {BudgetApi} from "../api/BudgetApi";

export const BudgetService = {
    getCurrentYearBudget
};

function getCurrentYearBudget() {
    const filter = new TransactionsFilter()
    filter.from = DateUtils.getStartOfYear()
    filter.to = DateUtils.getEndOfYear()
    filter.skip = 0
    filter.limit = 10

    return BudgetApi.getPayments(filter)
}
