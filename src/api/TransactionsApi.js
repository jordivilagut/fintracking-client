import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const TransactionsApi = {
    getTransaction: (id) =>
        api.get('/transactions/' + id).set("Authorization", CookiesService.get("authToken")),
    getTransactions: (filter) =>
        api.post('/transactions', filter).set("Authorization", CookiesService.get("authToken")),
    addTransaction: (transaction) =>
        api.post('/transactions/add', transaction).set("Authorization", CookiesService.get("authToken")),
    updateTransaction: (id, transaction) =>
        api.post('/transactions/' + id, transaction).set("Authorization", CookiesService.get("authToken")),
    deleteTransaction: (id) =>
        api.del('/transactions/' + id).set("Authorization", CookiesService.get("authToken"))
};
