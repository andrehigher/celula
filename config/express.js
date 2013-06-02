
var express = require('express'),
    path = require('path');

module.exports = function(app, passport){

	app.configure(function(){
	  app.set('port', process.env.PORT || 3000);
	  app.set('views', __dirname + '/../views');
	  app.set('view engine', 'ejs');
	  app.use(express.favicon());
	  app.use(express.logger('dev'));
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  app.use(express.cookieParser('your secret here'));
	  app.use(express.session({secret: 'your secret here'}));
	  app.use(passport.initialize());
	  app.use(passport.session());
	  app.use(app.router);
	  app.use(express.static(path.join(__dirname, '/../public')));
	});

	app.configure('development', function(){
	  app.use(express.errorHandler());
	});


}