const Joi = require('joi');

/*
* validation for price converter api.
*/
const priceConverter = {
  query: Joi.object().keys({
    coin: Joi.string().required(),
    fiat: Joi.string().required(),
    amount: Joi.number().required(),
  }),
};

module.exports = {
    priceConverter,
};