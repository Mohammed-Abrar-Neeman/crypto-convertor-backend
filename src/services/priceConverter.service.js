/* eslint-disable no-console */
const {getCoinLists, getCurrencyList, getCurrentPrice} = require('../oracles/Exchanges/coingecko')

/* 
 * desc: Get all list of coins supported
 */
const queryCoinList = async () => {
  const result = await getCoinLists();
  return result;
};

/* 
 * desc: Get all list of fiat currency supported
 */
const queryCurrencyList = async () => {
  const result = await getCurrencyList();
  return result;
};

/* 
 * desc: Get price from crypto to fiat currency
 */
const queryPriceConverter = async (params) => {
  const { coin, fiat, amount } = params;
  const result = await getCurrentPrice(coin, fiat, amount);
  return result;
};

module.exports = {
    queryCoinList,
    queryCurrencyList,
    queryPriceConverter,
};