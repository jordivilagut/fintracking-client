import {AuthRequest} from "../model/AuthRequest";
import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const UserApi = {
    signup: (email, password) =>
        api.post('/auth/signup', new AuthRequest(email, password)),
    login: (email, password) =>
        api.post('/auth/login', new AuthRequest(email, password)),
    autoLogin: () =>
        api.post('/auth/login').set("Authorization", CookiesService.get("authToken")),
    logout: () =>
        api.del('/auth').set("Authorization", CookiesService.get("authToken"))
};
