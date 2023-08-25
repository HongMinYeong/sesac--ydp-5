const Comment = require('../model/info');

exports.main = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  res.render('login');
};
