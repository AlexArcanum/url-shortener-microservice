var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

var routes = require('./api/routes');

app.use('/', routes);

var server = app.listen(PORT, function(req, res) {
  console.log("The app is listening on port: " + PORT)
})