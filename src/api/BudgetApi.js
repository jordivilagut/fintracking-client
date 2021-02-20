import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const BudgetApi = {
    getItem: (id) =>
        api.get('/budget/' + id).set("Authorization", CookiesService.get("authToken")),
    getItems: (filter) =>
        api.post('/budget', filter).set("Authorization", CookiesService.get("authToken")),
    addItem: (item) =>
        api.post('/budget/add', item).set("Authorization", CookiesService.get("authToken")),
    updateItem: (id, item) =>
        api.post('/budget/' + id, item).set("Authorization", CookiesService.get("authToken")),
    deleteItem: (id) =>
        api.del('/budget/' + id).set("Authorization", CookiesService.get("authToken"))
};
