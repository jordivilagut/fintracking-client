import {TransactionsFilter} from "../model/TransactionsFilter";
import {TransactionsApi} from "../api/TransactionsApi";
import {DateUtils} from "../utils/DateUtils";


export const TransactionsService = {
    getCurrentMonthTransactions
};

function getCurrentMonthTransactions(month) {
    const filter = new TransactionsFilter()
    filter.from = DateUtils.getStartOfMonth(month)
    filter.to = DateUtils.getEndOfMonth(month)
    filter.skip = 0
    filter.limit = 10

    return TransactionsApi.getTransactions(filter)
}
