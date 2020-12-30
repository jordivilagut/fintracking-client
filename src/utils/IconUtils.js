import {faCoffee, faTshirt} from '@fortawesome/free-solid-svg-icons'

export const IconUtils = {
    getIconFromExpenseType
};

function getIconFromExpenseType(expenseType) {
    console.log(expenseType)
    switch (expenseType) {
        case "CLOTHING":
            return faTshirt;
        default:
            return faCoffee;
    }
}
