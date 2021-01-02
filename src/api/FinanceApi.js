import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const FinanceApi = {
    getMonthlySummary: () =>
        api.get('/finance').set("Authorization", CookiesService.get("authToken")),
    getCurrentFunds: () =>
        api.get('/finance/balance').set("Authorization", CookiesService.get("authToken")),
    setCurrentFunds: (amount) =>
        api.post('/finance/balance', amount).set("Authorization", CookiesService.get("authToken"))
};
