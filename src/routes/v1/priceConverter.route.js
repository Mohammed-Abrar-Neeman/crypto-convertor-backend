const express = require('express');
const validate = require('../../middlewares/validate');
const { priceConverterValidation } = require('../../validations');
const { priceConverterController } = require('../../controllers');

const router = express.Router();

/* get:
 * desc: Get all list of coins supported
 */
router.route('/coinsList').get(priceConverterController.coinsList);

/* get:
 * desc: Get all list of fiat currency supported
 */
router.route('/currencyList').get(priceConverterController.currencyList);

/* get:
 * desc: Get price from crypto to fiat currency
 */
router.route('/getPrice').get(validate(priceConverterValidation.priceConverter), priceConverterController.priceConverter);

module.exports = router;
