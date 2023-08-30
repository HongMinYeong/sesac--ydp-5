const mysql = require('mysql');

const conn = mysql.createConnection({
  //db 연결 설정
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'mvc',
});

exports.register = (data, callback) => {
  console.log('model register 함수 실행~ ');

  conn.query(
    `INSERT INTO USER VALUES(null,${data.userid},${data.name},${data.pw})`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model >>', rows);
      callback();
    }
  );
};
