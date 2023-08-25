const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//index는 생략 가능!
const indexRouter = require('./routes/index');
// const indexRouter = require('./routes');
//indexRouter 에서는 localhost:PORT/ 기본경로
app.use('/', indexRouter); //루트경로에 온거를 indexRouter로 넘기겠다.
//./routes/index.js파일에 선언한 대로 동작

//404 Error 처리
//반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
