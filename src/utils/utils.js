// Exporting the function as a module (ES6 style)
export function formatCurrency(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
