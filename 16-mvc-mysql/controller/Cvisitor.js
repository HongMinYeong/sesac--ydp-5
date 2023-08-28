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

// controller >> [
//   RowDataPacket { id: 1, name: '홍길동', comment: '내가 왔다.' },
//   RowDataPacket { id: 2, name: '이찬혁', comment: '으라차차' }
// ]

exports.postVisitor = (req, res) => {
  console.log('controller postVisitor 함수 실행~~');
  console.log('axios의 data', req.body); //axios의 data 날라옴
  const { name, comment } = req.body;
  Visitor.postVisitor(req.body, (insertId) => {
    //model/visitor에 콜백함수로 받아오는 값
    console.log('controller >>', insertId);
    // res.send('프론트로 보낼 데이터 ');
    res.send({ id: insertId, name: name, comment: comment });
  });
};
