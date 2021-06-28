const options = { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);
export const formatMoney=(currency)=>numberFormat.format(currency);
