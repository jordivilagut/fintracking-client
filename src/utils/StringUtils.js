export const StringUtils = {
    capitalise,
};

function capitalise(str) {
    return str != null ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
}
