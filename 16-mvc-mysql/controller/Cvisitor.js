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

exports.deleteVisitor = (req, res) => {
  console.log('controller deleteVisitor 함수 실행~ ');
  console.log(req.body); // {id:xx}

  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    //첫번째 인자에 id를 넣고 두번째 인자에 콜백함수 넣어주깅
    console.log('controller>>', result); //callback함수의 인자 성공시 true
    res.send(result); //res.send(true)
  });
};

exports.getVisitor = (req, res) => {
  console.log(req.params); //{id : '5'} //GET/visitor/:id
  // console.log(req.query); //{}  //GET/visitor?id=5
  const { id } = req.params;

  Visitor.getVisitor(id, (result) => {
    console.log(result);
    res.send(result);
  });
};

exports.updateVisitor = (req, res) => {
  console.log(req.body); //{id:x,name:x,comment:x}
  Visitor.updateVisitor(req.body, () => {
    res.send({ isUpdated: true });
  });
};
