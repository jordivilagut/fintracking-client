import {api} from "./agent";

export const StoreApi = {
    getDepartments: () => api.get('/store/depts'),
    getProducts: (deptId) => api.get('/store/depts/' + deptId + '/products')
};
