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
        case "ca-es":
        case "ca-ad":
        case "ca-ES":
        case "ca-AD":
            return "spanish";
        default:
            return "english";
    }
}
