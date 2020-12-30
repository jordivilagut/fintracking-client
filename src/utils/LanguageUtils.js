export const DateUtils = {
    getLanguageFromSymbol
};

function getLanguageFromSymbol(lang) {
    switch (lang) {
        case "es":
        case "spanish":
        case "es-es":
        case "es-mx":
        case "Es":
        case "Es-es":
        case "Es-mx":
            return "spanish";
        default:
            return "english";
    }
}
