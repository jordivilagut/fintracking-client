import {api} from "./agent";

export const GeneralApi = {
    getOperationTypes: () =>
        api.get('/public/operations'),
    getExpenseTypes: () =>
        api.get('/public/expensetypes'),
}
