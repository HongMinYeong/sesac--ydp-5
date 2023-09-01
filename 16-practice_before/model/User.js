const mysql = require('mysql');

const conn = mysql.createConnection({
  //db 연결 설정
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'mvc',
});

exports.signup = (data, callback) => {
  const sql = `insert into user (userid, name, pw) 
                values ('${data.userid}', '${data.name}', '${data.pw}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model 에서 post_signup 함수 실행~ @@ >> ', rows);
    // OkPacket {
    //   fieldCount: 0,
    //   affectedRows: 1,
    //   insertId: 5,
    //   serverStatus: 2,
    //   warningCount: 0,
    //   message: '',
    //   protocol41: true,
    //   changedRows: 0
    // }
    callback();
  });
};

exports.signin = (data, callback) => {
  const isUser = `select * from user 
                  where userid = '${data.userid}' and pw = '${data.pw}' LIMIT 1;`;
  conn.query(isUser, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model에서 post_signin 함수 실행~ @@ >>', rows);
    callback(rows);
  });
};

exports.profile = (userid, callback) => {
  const sql = `select * from user where userid = '${userid}' LIMIT 1;`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model post_profile >>', rows);
    callback(rows);
  });
};

exports.delete_profile = (id, callback) => {
  const sql = `delete from user where id = '${id}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model delete_profile >>', rows);
    callback();
  });
};

exports.edit_profile = (data, callback) => {
  const sql = `update user set 
    userid='${data.userid}', name = '${data.name}', pw='${data.pw}' 
    where id='${data.id}';`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model edit_profile >>', rows);
    callback();
  });
};
