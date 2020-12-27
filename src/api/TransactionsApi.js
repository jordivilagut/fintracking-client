import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const TransactionsApi = {
    getTransactions: () => api.get('/transactions').set("Authorization", CookiesService.get("authToken"))
};
