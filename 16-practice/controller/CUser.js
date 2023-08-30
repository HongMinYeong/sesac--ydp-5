const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};
exports.getsignup = (req, res) => {
  res.render('signup');
};

exports.register(req,res) =>{

}
