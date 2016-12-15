var express = require('express');
var router = express.Router();

var ctrlAddresses = require('../controllers/addresses.controllers.js');

router
  .route('/new/:url')
  .get(ctrlAddresses.addOneAddress);

router
  .route('/:shorturl')
  .get(ctrlAddresses.getShortAddress);

module.exports = router;