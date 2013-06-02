
module.exports = function (app, passport, auth) {

	/*
	*	Declaração dos routes
	*
	*/
	var index 					= require('../routes/index'),
			user 						= require('../routes/user'),
			login						= require('../routes/login'),
			celula 					= require('../routes/celula');


	/**
	* Index
	*/
	app.get('/', index.index);



	/**
	* Users
	*/
	app.get(		'/users', 		user.list);
	app.get(		'/users/:id', user.find);
	app.put(		'/users/:id', user.update);
	app.post(		'/users', 		user.create);
	app.delete(	'/users/:id', user.delete);




	/**
	* Login
	*/
	app.get('/login',login.login);
	app.post('/login', passport.authenticate('local', { successRedirect: '/celula',
                     failureRedirect: '/login',
                     failureFlash: false })
	);




	/**
	* Logout
	*/
	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});




	/** 
	* Celula App
	*/
	app.get('/celula', auth.requiresLogin, celula.index);

}