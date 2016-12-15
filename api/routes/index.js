var express = require('express');
var router = express.Router();

var ctrlAddresses = require('../controllers/addresses.controllers.js');

router
  .route('/new/:address')
  .get(ctrlAddresses.addOneAddress);

module.exports = router;