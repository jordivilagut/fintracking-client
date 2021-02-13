import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const BudgetApi = {
    getBudgetItems: (filter) =>
        api.post('/budget', filter).set("Authorization", CookiesService.get("authToken")),
    addPayment: (payment) =>
        api.post('/budget/add', payment).set("Authorization", CookiesService.get("authToken")),
    deletePayment: (id) =>
        api.del('/budget/' + id).set("Authorization", CookiesService.get("authToken"))
};
