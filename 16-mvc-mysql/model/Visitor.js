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
  conn.query('SELECT * FROM VISITOR', (err, rows) => {
    if (err) {
      //만약에 에러가 발생하면 에러를 던지고
      throw err;
    }
    //그게 아니라면
    console.log('VISITOR.js', rows);
    callback(rows); //callback으로 rows를 넘길거임
    //이 callback을 컨트롤러가 받아올 수 있음
  });
};
