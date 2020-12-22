import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const SecuredApi = {
    getSecretMessage: () =>
        api.get('/hello').set("Authorization", CookiesService.get("authToken"))
};
