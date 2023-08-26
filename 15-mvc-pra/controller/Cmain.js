const User = require('../model/user');

exports.main = (req, res) => {
  res.render('index');
};

// 실습 1
// exports.login = (req, res) => {
//   const userData = User.getUserInfo();
//   console.log(userData);

//   if (userData.Id === req.body.Id && userData.Pw === req.body.Pw) {
//     res.send({ isLogin: true, Info: req.body });
//   } else {
//     res.send({ isLogin: false });
//   }
// };

// 선택 실습
exports.login = (req, res) => {
  const user_datas = User.users.split('\n');
  console.log(
    '===========================선택 실습 =========================='
  );
  console.log(user_datas);
  // [ 'apple//1234//사과사과', 'banana//4321//바나나나나', 'happy//qwer1234//해피해피' ]

  const users = []; // 유저 정보 배열
  const Ids = []; // 유저 아이디만 저장 배열
  for (let user of user_datas) {
    users.push({
      Id: user.split('//')[0],
      Pw: user.split('//')[1],
      name: user.split('//')[2],
    });
    Ids.push(user.split('//')[0]);
  }
  console.log(users);
  // [
  //   { Id: 'apple', Pw: '1234', name: '사과사과' },
  //   { Id: 'banana', Pw: '4321', name: '바나나나나' },
  //   { Id: 'happy', Pw: 'qwer1234', name: '해피해피' }
  // ]
  console.log(Ids);
  // [ 'apple', 'banana', 'happy' ]

  // 사용자가 폼에 입력-> req.body.Id
  const id_index = Ids.indexOf(req.body.Id); //입력한 id의 인덱스 찾음 없으면 id_index = -1 출력
  console.log(id_index);
  //사용자가 id 로 apple 입력 -> id_index = 0
  //사용자가 id 로 banana 입력 -> id_index = 1
  //사용자가 id 로 happy 입력 -> id_index = 2
  if (id_index >= 0) {
    //id_index는 0 ~ 2
    // = id 있는 경우 (id_index : -1이면 사용자가 입력한 id가 users 배열안에 없음)
    console.log(users[id_index]);
    //users 에서 id index순서의 users정보 배열 꺼내옴 -> { Id: 'banana', Pw: '4321', name: '바나나나나' }
    if (users[id_index].Pw === req.body.Pw) {
      // 비밀번호 일치 (+ 아이디 존재 )
      res.send({ isLogin: true, Info: users[id_index] });
    } else {
      res.send({ isSuccess: false });
    }
  } else {
    res.send({ isSuccess: false });
  }
};
