import {api} from "./agent";

export const ProductApi = {
    get: (productId) => api.get('/products/' + productId)
};
