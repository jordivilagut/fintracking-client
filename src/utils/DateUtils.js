import moment from "moment";

export const DateUtils = {
    dayMonthFormat,
    formatDate,
    now,
    getMonthNames,
    getStartOfMonth,
    getEndOfMonth,
    getStartOfYear,
    getEndOfYear,
    toUTC
};

function formatDate (timestamp) {
    return new Date(timestamp).toDateString();
}

function dayMonthFormat (timestamp) {
    return new Date(timestamp).toISOString().substr(5,5).replace("-","/");
}

function toUTC(timestamp) {
    const date = new Date(timestamp)
    return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
}

function now() {
    return moment().clone()
}

function getStartOfMonth(month) {
    return timestamp(now().startOf('month'))
}

function getEndOfMonth(month) {
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

function getMonthNames() {
    return ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
}
