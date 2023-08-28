const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  //[before]
  //res.render('visitor', { data: Visitor.getVisitors() });

  //[after]
  Visitor.getVisitors((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result }); //model에서 받아온 result를 넘길거임
  });
};
