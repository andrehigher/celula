
exports.requiresLogin = function (req, res, next) {
	res.locals.req = req;
  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
}