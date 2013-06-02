
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    passport = require('passport'),
    fs = require('fs'),
    auth = require('./config/middleware');

var app = express();

require('./config/express')(app, passport);

// Faz o load dos arquivos do model
var models_path = __dirname + '/model'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
});

// Configurações do mongo
require('./config/mongo');

// Configurações do passport
require('./config/passport')(passport);

// Routes
require('./config/routes')(app,passport,auth);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
