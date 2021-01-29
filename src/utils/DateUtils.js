import moment from "moment";

export const DateUtils = {
    formatDate,
    now,
    getStartOfMonth,
    getEndOfMonth,
    getStartOfYear,
    getEndOfYear
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

function getStartOfYear() {
    return timestamp(now().startOf('year'))
}

function getEndOfYear() {
    return timestamp(now().endOf('year'))
}

function timestamp(date) {
    return date.unix() * 1000
}
