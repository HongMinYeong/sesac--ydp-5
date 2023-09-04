// const Visitor = require('../model/Visitor');
// const models = require('../models'); // ../models/index.js
//위에 코드를 구조분해
const { Visitor } = require('../models');
const moment = require('moment');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = async (req, res) => {
  //[before]
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result }); //model에서 받아온 result를 넘길거임
  // });
  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

exports.postVisitor = async (req, res) => {
  // [before]
  // console.log('controller postVisitor 함수 실행~~');
  // console.log('axios의 data', req.body); //axios의 data 날라옴
  // const { name, comment } = req.body;
  // Visitor.postVisitor(req.body, (insertId) => {
  //   //model/visitor에 콜백함수로 받아오는 값
  //   console.log('controller >>', insertId);
  //   // res.send('프론트로 보낼 데이터 ');
  //   res.send({ id: insertId, name: name, comment: comment });
  // });
  //[after]
  console.log('req.body 는 ', req.body);
  const { name, comment } = req.body;

  const result = await Visitor.create({
    name,
    comment,
  });
  //console.log(result); -> create 메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result); //result 보내주기전엔 undefined 뜸
};

exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log('controller deleteVisitor 함수 실행~ ');
  // console.log(req.body); // {id:xx}

  // const { id } = req.body;

  // Visitor.deleteVisitor(id, (result) => {
  //   //첫번째 인자에 id를 넣고 두번째 인자에 콜백함수 넣어주깅
  //   console.log('controller>>', result); //callback함수의 인자 성공시 true
  //   res.send(result); //res.send(true)
  // });

  //[after]
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  console.log(result);
  // res.send(result); -> error -> response로 보내면 안되는애를 보냄
  res.send(true);
};

exports.getVisitor = async (req, res) => {
  // [before]
  // console.log(req.params); //{id : '5'} //GET/visitor/:id
  // // console.log(req.query); //{}  //GET/visitor?id=5
  // const { id } = req.params;
  // Visitor.getVisitor(id, (result) => {
  //   console.log(result);
  //   res.send(result);
  // });
  //[after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);
};

exports.updateVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); //{id:x,name:x,comment:x}
  // Visitor.updateVisitor(req.body, () => {
  //   res.send({ isUpdated: true });
  // });
  // [after]
  //update(변경될 값, where절)
  const result = await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send({ isUpdated: true }); //static/js/visitor.js에서 데이터 구조분해한 값
};
