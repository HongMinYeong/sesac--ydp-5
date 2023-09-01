const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// cookieparser 미들웨어 등록 (요청과 응답의 중개역할, 요청들어오면 서버세팅 한번에 해주는 애 )
// 일반 쿠키
// app.use(cookieParser());
// 암호화 쿠키
const COOKIE_SECRET_KEY = 'This is my secret key'; // 쿠키에 대한 비밀 키
app.use(cookieParser(COOKIE_SECRET_KEY));

const myCookieConf = {
  // httpOnly: 웹 서버를 통해서만 쿠키 접근 가능 (프론트에서 document.cookie로 접근을 차단 )
  // maxAge: 쿠키 수명 (단위 ms)
  // expires: 만료 날짜를 GMT시간설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정(req.signedCookies객체에 들어있음)
  httpOnly: true,
  maxAge: 20 * 1000, //20s
  signed: true, //암호화 쿠키 쓸때 쓰는 옵션
};

app.get('/', (req, res) => {
  res.render('cookie');
});

app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키 키. 쿠키 값, 쿠키 옵션) -> 3가지 인자를 가진다
  res.cookie('myCookie', 'myValue', myCookieConf); //응답하는게 아니어서 res 두번써도됨 ^^

  res.send('cookie 설정 완료!');
});

// 쿠키 정보
app.get('/getCookie', (req, res) => {
  // 일반 쿠키
  //   res.send(req.cookies);
  //암호화 된 쿠키
  res.send(req.signedCookies);
});

// 쿠키 삭제
app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'myValue', myCookieConf);

  res.send('Cookie 삭제 완료! ');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
