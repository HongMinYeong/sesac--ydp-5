const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8001;

const db = require('./models');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록
app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, //1m
    },
  })
);
// TODO: routes/user 요청 경로 분리
const indexRouter = require('./routes');
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// // GET / 요청시; 세션의 user 키 값 확인 (req.session.user)
// app.get('/', (req, res) => {
//   // user 키 값 있다면; index.ejs 랜더 + isLosgin 을 true 로 user를 user 로 만들어서 전달
//   const userSession = req.session.user;
//   console.log(userSession);
//   if (userSession !== undefined) {
//     res.render('index', { isLogin: true, user: userSession });
//   } else {
//     res.render('index', { isLogin: false });
//   }
//   // user 키 값 없다면; index.ejs 랜더 + isLosgin 을 false 로 하여 전달
// });

// // GET /login 요청시; login.ejs 랜더
// app.get('/login', (req, res) => {
//   res.render('login');
// });

// // POST /login 요청시;
// app.post('/login', (req, res) => {
//   // TODO: 정답 아이디와 폼에 적힌 아이디, 정답 비번과 폼에 적힌 비번 비교
//   // 같다면 (로그인 통과); 세션에 user 키로 아이디를 저장
//   // 틀리면 (로그인 실패); send() 메서드를 이용해 script 전송 (로그인 실패 alert & 브라우저 경로 홈으로 이동)
//   // 참고 res.send(<script>...</script>) front js 코드 전송 가능
//   if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
//     req.session.user = req.body.id;
//     res.redirect('/');
//   } else {
//     res.send(
//       `<script> alert('로그인 실패..🥺'); document.location.href = '/'; </script>`
//     );
//   }
// });

// // GET /logout 요청시;
// app.get('/logout', (req, res) => {
//   // TODO: 세션 삭제
//   //   const userSession = req.session.user;
//   req.session.destroy((err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.redirect('/');
//   });
// });

app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
