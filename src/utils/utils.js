const percentToCurrency = (per, currencyPrice) => (per * currencyPrice) / 100;
const getProfit = (profitPer, currencyPrice) => (currencyPrice * profitPer);


export {
    percentToCurrency,
    getProfit
};