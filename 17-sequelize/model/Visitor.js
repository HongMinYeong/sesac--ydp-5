// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '홍길동', comment: '내가 왔다.' },
//     { id: 2, name: '이찬혁', comment: ' 으라차차' },
//   ];
// };

const mysql = require('mysql');

const conn = mysql.createConnection({
  //db 연결 설정
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'mvc',
});

exports.getVisitors = (callback) => {
  // [before]
  // return [
  //     { id: 1, name: '홍길동', comment: '내가 왔다.' },
  //     { id: 2, name: '이찬혁', comment: ' 으라차차' },
  //   ];
  // [after]
  //db연결 객체에다가 query를 날릴거임
  conn.query(
    'SELECT * FROM VISITOR ORDER BY id DESC',
    'alter table visitor auto_increment=1',
    (err, rows) => {
      if (err) {
        //만약에 에러가 발생하면 에러를 던지고
        throw err;
      }
      //그게 아니라면
      console.log('model >>', rows);
      callback(rows); //callback으로 rows를 넘길거임
      //이 callback을 컨트롤러가 받아올 수 있음
    }
  );
};

// model >> [
//   RowDataPacket { id: 1, name: '홍길동', comment: '내가 왔다.' },
//   RowDataPacket { id: 2, name: '이찬혁', comment: '으라차차' }
// ]

//데이터베이스에 추가하는 함수
exports.postVisitor = (data, callback) => {
  console.log('model postVisitor 함수 실행~');
  //매개변수
  //data : 프론트엔드에서 유저가 입력한 값(req.body)
  //callback : query 실행 후 호출할 함수

  conn.query(
    `INSERT INTO visitor VALUES(null, "${data.name}","${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model ** >>', rows);
      callback(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  console.log('model deleteVisitor 함수 실행~ ');
  console.log('model >>', id); //front에서 알려준 삭제할 데이터의 pk

  conn.query(`DELETE FROM visitor where id=${id} `, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model>>', rows);
    callback(true); //{id:id} 여기서 넘기는 데이터가 달라지면 controller코드도 달라짐 !
  });
};

exports.getVisitor = (id, callback) => {
  conn.query(`SELECT * FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows); // [ RowDataPacket { id: 8, name: 'aa', comment: 'aa' } ]
    console.log('rows배열 0번째 인덱스', rows[0]); //rows배열 0번째 인덱스 RowDataPacket { id: 8, name: 'aa', comment: 'aa' }
    callback(rows[0]);
  });
};

exports.updateVisitor = (updateData, callback) => {
  const { id, name, comment } = updateData;
  const sql = `update visitor set name = '${name}', comment ='${comment}' where id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('updateVisitor rows는 ', rows);
    callback();
  });
};
