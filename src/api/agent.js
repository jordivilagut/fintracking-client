import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const apiUrl = process.env.REACT_APP_API_URL;

export const api = {
    del: path =>
        superagent.del(apiUrl + path),
    get: path =>
        superagent.get(apiUrl + path),
    put: (path, body) =>
        superagent.put(apiUrl + path, body).set('Content-Type', 'application/json'),
    post: (path, body) =>
        superagent.post(apiUrl + path, body).set('Content-Type', 'application/json')
};
