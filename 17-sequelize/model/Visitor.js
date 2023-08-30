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
  conn.query(
    'SELECT * FROM VISITOR ORDER BY id DESC',
    'alter table visitor auto_increment=1',
    (err, rows) => {
      if (err) {
        throw err;
      }
      //그게 아니라면
      console.log('model >>', rows);
      callback(rows);
    }
  );
};

exports.postVisitor = (data, callback) => {
  console.log('model postVisitor 함수 실행~');
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
