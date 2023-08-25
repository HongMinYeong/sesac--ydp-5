const User = require('../model/info');

exports.join = (req, res) => {
  res.render('join');
};

exports.post_join = (req, res) => {
  User.post_join(req.body);
  res.render('success_join', { name: req.body.name });
};

exports.login = (req, res) => {
  res.render('login');
};

exports.post_login = async (req, res) => {
  var data = await User.post_login();

  data = data.slice(0, -1).split('\n');

  for (var i = 0; i < data.length; i++) {
    var info = data[i].split('//');

    if (info[0] == req.body.id && info[4] == req.body.password) {
      return res.render('success_login', {
        id: req.body.id,
        msg: '로그인 되었습니다.',
      });
    }
  }

  return res.render('failed_login', { msg: '로그인 실패하였습니다.' });
};
