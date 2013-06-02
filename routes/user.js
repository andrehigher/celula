// var mongoose = require('mongoose'),
//  		User = mongoose.model('User');
/*
 * GET users listing.
 */

exports.list = function(req, res){
	var mongoose = require('mongoose'),
 			User = mongoose.model('User');

  res.send(User.find());
};

exports.find = function(req, res){
	var mongoose = require('mongoose'),
			User = mongoose.model('User');

	User.findOne({_id: req.param('id')},(function (err, user) {
		res.send(user);
	}));
};

exports.update = function(req, res){

};

exports.create = function(req, res){

};

exports.delete = function(req, res){

};