const axios = require('axios');
const config = require('../../config/config');

  const baseUrl = 'https://api.coingecko.com/api/v3';

  /**
   * Get all the cryptocurrency list supported
   */
    const getCoinLists = async () => {
      const pathParams = 'coins/list?x_cg_demo_api_key=';
      let result;
      await axios.get(`${baseUrl}/${pathParams}${config.cgapi}`)
      .then(function(response) {
        try {
          result = response.data;
        } catch (e) {
          console.log(`Unable to process data '${JSON.stringify(response.data).substring(0, 100)}' from request to ${baseUrl}. Unable to get cryptocurrency. Try to restart InfoService or there will be no cryptocurrency. Error: ${e}`, 'error');
        }
      })
      .catch(function(error) {
        console.log(`Request to ${baseUrl} failed with ${error.response?.status} status code, ${error.toString()}. Unable to get cryptocurrency. Try to restart InfoService or there will be no cryptocurrency.`, 'error');
      });
      return result;
  }

  /**
   * Get price of the requested crypto to respective fiat
   * @param ids - The cryptocurrency symbol of interest eg. BTC
   * @param vs_currencies - fiat currency symbols list to convert into eg. USD
   * @param amount - amount to multiple
   */
  const getCurrentPrice =async(ids, vs_currencies, amount) => {
    const pathParams = 'simple/price';
    const queryParams = `ids=${ids}&vs_currencies=${vs_currencies}`;
    let price;
    await axios.get(`${baseUrl}/${pathParams}?${queryParams}&x_cg_demo_api_key=${config.cgapi}`)
      .then(function(response) {
        try {
          const data = response.data[ids][vs_currencies];
          if(amount > 0){
            price = (data * amount);
          }else{
            price = data;
          }
        } catch (e) {
          console.log(`Unable to process data ${JSON.stringify(response.data)} from request to ${baseUrl} ${JSON.stringify(params)}. Error: ${e}`, 'error');
        }
      })
      .catch(function(error) {
        console.log(`Request to ${baseUrl} failed with ${error.response?.status} status code, ${error.toString()}. Unable to get coin ids. Try to restart InfoService or there will be no rates.`, 'error');
      });
      return {price};
  }

  /**
   * Get list of supported fiat currency symbol
   */
  const getCurrencyList =async() => {
    const pathParams = 'simple/supported_vs_currencies?x_cg_demo_api_key=';
    let result;
    await axios.get(`${baseUrl}/${pathParams}${config.cgapi}`)
      .then(function(response) {
        try {
          result = response.data;
        } catch (e) {
          console.log(`Unable to process data ${JSON.stringify(response.data)} from request to ${baseUrl} ${JSON.stringify(params)}. Error: ${e}`, 'error');
        }
      })
      .catch(function(error) {
        console.log(`Request to ${baseUrl} failed with ${error.response?.status} status code, ${error.toString()}. Unable to get currency list. Try to restart InfoService or there will be no data.`, 'error');
      });
      return result;
  }


module.exports = {
  getCoinLists,
  getCurrencyList,
  getCurrentPrice,
};
