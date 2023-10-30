const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = '9PBYbnIhfXEVQdeXrvPWrX6ydDAJkIqV';

const userInfo = { id: 'banana', pw: '1234', name: '홍길동', age: 29 };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  try {
    const { id, pw } = req.body; //유저가 입력한 정보
    const { id: realId, pw: realPw } = userInfo; //유저의 정답 정보

    if (id === realId && pw === realPw) {
      //토큰 생성(암호화해서))
      const token = jwt.sign({ id: id }, SECRET);
      res.json({ result: true, token: token });
    } else {
      //로그인 실패 응답
      res.json({ result: false, message: '로그인 정보가 올바르지 않음!' });
    }
  } catch (err) {
    console.error(err);
  }
});

app.post('/token', (req, res) => {
  if (req.headers.authorization) {
    //Bearer token_string
    const token = req.headers.authorization.split(' '); //['Bearer','token_string']
    // console.log('token은 ',token)
    try {
      const result = jwt.verify(token[1], SECRET);
      console.log('result >>', result); //result >> { id: 'banana', iat: 1698644279 }
      if (result.id === userInfo.id) {
        res.json({
          result: true,
          name: userInfo.name,
          message: '인증된 회원입니다.',
        });
      }
    } catch (err) {
      console.error(err);
      res.json({ result: false, message: '인증된 회원이 아님' });
    }
  } else {
    res.redirect('/login');
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
