
var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/url_shortener';

mongoose.Promise = global.Promise;
mongoose.connect(dburl);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dburl);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected thorugh app termination (SIGINT)');
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected thorugh app termination (SIGTERM)');
    process.exit(0);
  });
});

process.once('SIGUSR2', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected thorugh app termination (SIGUSR2)');
    process.kill(process.pid, 'SIGUSR2');
  });
});

require('./shorturls.model.js');