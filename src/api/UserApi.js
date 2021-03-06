import {AuthRequest} from "../model/AuthRequest";
import {api} from "./agent";
import {CookiesService} from "../services/CookiesService";

export const UserApi = {
    signup: (email, password, name) =>
        api.post('/auth/signup', new AuthRequest(email, password, name)),
    login: (email, password) =>
        api.post('/auth/login', new AuthRequest(email, password)),
    autoLogin: () =>
        api.post('/auth/login').set("Authorization", CookiesService.get("authToken")),
    logout: () =>
        api.del('/auth').set("Authorization", CookiesService.get("authToken")),
    recoverPassword: (email) =>
        api.post('/auth/forgot-pwd', email),
    changePassword: (token, password) =>
        api.post('/auth/change-pwd', password).set("Authorization", token),
    googleLogin: (googleIdToken) =>
        api.post('/auth/glogin', googleIdToken),
    googleSignup: (googleIdToken) =>
        api.post('/auth/gsignup', googleIdToken)
};
