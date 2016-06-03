var express = require('express');
var router = express.Router();
var Hero = require('../models/heroes');

router.get('/', function (req, res) {
  Hero.find({}, function (err, movies) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(movies);
  });
});

router.post('/', function (req, res) {
  var hero = new Hero(req.body);
  Hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

router.delete('/:id', function (req, res) {
  Hero.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
