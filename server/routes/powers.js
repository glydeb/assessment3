var express = require('express');
var router = express.Router();
var SuperPowers = require('../models/powers');

router.get('/', function (req, res) {
  SuperPowers.find({}, function (err, powers) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(powers);
  });
});

module.exports = router;
