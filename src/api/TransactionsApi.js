import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const TransactionsApi = {
    getTransaction: (id) =>
        api.get('/transactions/' + id).set("Authorization", CookiesService.get("authToken")),
    getTransactions: (filter) =>
        api.post('/transactions', filter).set("Authorization", CookiesService.get("authToken")),
    addTransaction: (transaction) =>
        api.post('/transactions/add', transaction).set("Authorization", CookiesService.get("authToken")),
    deleteTransactions: (id) =>
        api.del('/transactions/' + id).set("Authorization", CookiesService.get("authToken"))
};
