export const CurrencyUtils = {
    formatCurrency
};

function formatCurrency(amount) {
    return `${amount.toFixed(2)}€`;
}
