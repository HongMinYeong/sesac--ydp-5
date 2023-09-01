const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signup = (req, res) => {
  console.log('회원가입 폼 정보 >> ', req.body);

  User.signup(req.body, () => {
    res.end();
  });
};

exports.post_signin = (req, res) => {
  console.log(req.body); // 폼에 입력한 로그인 정보

  User.signin(req.body, (result) => {
    console.log(result);

    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);

  User.profile(req.body.userid, (result) => {
    console.log('result는 >>', result);

    if (result.length > 0) {
      res.render('profile', { data: result[0] });
    }
  });
};

exports.delete_profile = (req, res) => {
  console.log(req.body);
  User.delete_profile(req.body.id, () => {
    res.end();
  });
};

exports.edit_profile = (req, res) => {
  console.log('req.body는 >>>', req.body);

  User.edit_profile(req.body, () => {
    res.end();
  });
};
