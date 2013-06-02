
/*
 * GET web app.
 */

exports.index = function(req, res){
  res.render('celula',{
  	user_id: req.user._id
  });
};