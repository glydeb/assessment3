var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// modules
var heroes = require('./routes/heroes');
var powers = require('./routes/powers');
var index = require('./routes/index');

// serve static files
app.use(express.static(path.join(__dirname, './public')));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express routes
app.use('/heroes', heroes);
app.use('/powers', powers);
app.use('/', index);

// mongoose connection
var databaseURI = 'mongodb://localhost:27017/mu';

mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

// start server
app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
