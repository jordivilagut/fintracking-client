import {TransactionsFilter} from "../model/TransactionsFilter";
import {DateUtils} from "../utils/DateUtils";
import {BudgetApi} from "../api/BudgetApi";

export const BudgetService = {
    getYearBudget
};

function getYearBudget(year) {
    const filter = new TransactionsFilter()
    filter.from = DateUtils.getStartOfYear(year)
    filter.to = DateUtils.getEndOfYear(year)
    filter.skip = 0
    filter.limit = 10

    return BudgetApi.getItems(filter)
}
