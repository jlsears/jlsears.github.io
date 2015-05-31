/*GET home page. */
exports.index = function(req, res) {
  res.render('index', { title: 'used to be a title here'});
};

exports.partials = function(req, res) {
  res.render('partials/' + req.params.name);
};