const models = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signup = async (req, res) => {
  await models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  });
  res.end();
};

exports.post_signin = async (req, res) => {
  const result = await models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  });
  console.log('>>>>>> ', result);
  // 로그인 성공; result = {}
  // 로그인 실패; result = null
  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

exports.post_profile = async (req, res) => {
  const result = await models.User.findOne({
    where: { userid: req.body.userid },
  });
  console.log('>>>>>', result); // {}
  if (result) {
    res.render('profile', { data: result });
  }
};

exports.delete_profile = async (req, res) => {
  await models.User.destroy({
    where: { id: req.body.id },
  });
  res.end();
};

exports.edit_profile = async (req, res) => {
  await models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.end();
};
