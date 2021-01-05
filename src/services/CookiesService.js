import Cookies from "universal-cookie";

export const CookiesService = {
    storeCookie,
    removeCookie,
    get
};

function storeCookie(name, value) {
    const cookies = new Cookies();
    cookies.set(name, value, { path: '/' , expires: getDefaultExpirationDate()});
}

function removeCookie(name) {
    const cookies = new Cookies();
    cookies.remove(name, { path: '/' });
}

function get(name) {
    const cookies = new Cookies();
    return cookies.get(name)
}

function getDefaultExpirationDate() {
    const offset = 2_592_000_000 //One month
    let expirationDate = new Date()
    expirationDate.setTime(expirationDate.getTime() + offset);

    return expirationDate
}
