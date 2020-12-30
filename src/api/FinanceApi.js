import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const FinanceApi = {
    getMonthlySummary: () =>
        api.get('/finance').set("Authorization", CookiesService.get("authToken")),
};
