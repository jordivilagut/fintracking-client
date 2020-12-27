export const DateUtils = {
    formatDate
};

function formatDate (timestamp) {
    return new Date(timestamp).toDateString();
}
