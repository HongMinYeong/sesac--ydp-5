const User = require('../model/User');

exports.main = (req, res) => {
  res.render('index');
};
exports.getsignup = (req, res) => {
  res.render('signup');
};

exports.register = (req, res) => {
  console.log('controller register 함수 실행~');
  console.log(req.body); //axios의 data 날라오고
  const { userid, pw, name } = req.body;
  User.register(req.body, (insertId) => {
    console.log('controller register >>', insertId);
    res.send({ id: insertId, userid: userid, name: name, pw: pw });
  });
};
