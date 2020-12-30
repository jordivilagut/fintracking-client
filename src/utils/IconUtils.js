import {
    faBolt,
    faCar,
    faCircleNotch,
    faCoffee,
    faCoins,
    faFilm,
    faHandHoldingHeart,
    faHome,
    faHospitalSymbol,
    faMoneyBill,
    faPhone,
    faPlane,
    faShoppingBasket,
    faTshirt,
    faUserGraduate,
    faUtensils
} from '@fortawesome/free-solid-svg-icons'

export const IconUtils = {
    getIconFromExpenseType
};

function getIconFromExpenseType(expenseType) {
    switch (expenseType) {
        case "CLOTHING":
            return faTshirt;
        case "EDUCATION":
            return faUserGraduate;
        case "TRANSPORT":
            return faCar;
        case "TELCO":
            return faPhone;
        case "TRAVELS":
            return faPlane;
        case "STREAMING_PLATFORMS":
            return faFilm;
        case "GROCERIES":
            return faShoppingBasket;
        case "RESTAURANTS":
            return faUtensils;
        case "HEALTHCARE":
            return faHospitalSymbol;
        case "SALARY":
            return faMoneyBill;
        case "TAXES":
            return faCoins;
        case "CHARITY":
            return faHandHoldingHeart;
        case "HOUSING":
            return faHome;
        case "HOUSEHOLD_SUPPLIES":
            return faBolt;
        case "OTHER":
            return faCircleNotch;
        default:
            return faCoffee;
    }
}
