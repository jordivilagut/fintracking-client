import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const FinanceApi = {
    getMonthlySummary: (month, year) =>
        api.get('/finance/year/' + year + "/month/" + month).set("Authorization", CookiesService.get("authToken")),
    getYearlySummary: (year) =>
        api.get('/finance/year/' + year).set("Authorization", CookiesService.get("authToken")),
    getCurrentFunds: () =>
        api.get('/finance/balance').set("Authorization", CookiesService.get("authToken")),
    setCurrentFunds: (amount) =>
        api.post('/finance/balance', amount).set("Authorization", CookiesService.get("authToken"))
};
