const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { priceConverterService } = require('../services');

/* 
 * desc: Get all list of coins supported
 */
const coinsList = catchAsync(async (req, res) => {
  const result = await priceConverterService.queryCoinList();
  res.send(result);
});

/* 
 * desc: Get all list of fiat currency supported
 */
const currencyList = catchAsync(async (req, res) => {
  const result = await priceConverterService.queryCurrencyList();
  res.send(result);
});

/* 
 * desc: Get price from crypto to fiat currency
 */
const priceConverter = catchAsync(async (req, res) => {
  const price = await priceConverterService.queryPriceConverter(req.query);
  res.send(price);
});


module.exports = {
    coinsList,
    currencyList,
    priceConverter,
};