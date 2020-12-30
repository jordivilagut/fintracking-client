import moment from "moment";

export const DateUtils = {
    formatDate,
    now,
    getStartOfMonth,
    getEndOfMonth
};

function formatDate (timestamp) {
    return new Date(timestamp).toDateString();
}

function now() {
    return moment().clone()
}

function getStartOfMonth() {
    return timestamp(now().startOf('month'))
}

function getEndOfMonth() {
    return timestamp(now().endOf('month'))
}

function timestamp(date) {
    return date.unix() * 1000
}
