// [실습]
// 12-dynamic-form/폴더 생성
// 1. Npm 프로젝트 생성
// 2. Express 웹 서버 구축하기 위한 모듈 설치(1.express, 2. ejs)
// 3. 진입점 파일 생성(xxx.js)
// 4. Xxx.js 에 서버 실행할 코드 작성
// + GET/경로 요청시 dynamic.ejs 보여주기

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); //app에 뷰엔진은 ejs라는 템플릿을 사용하겠다.
app.set('/views', 'views'); //views라는 폴더에 views파일을 모아놓을거당
// app.use('/views', express.static(__dirname + 'views'));

app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); //데이터를 주고 받을 때 json 형식으로 받겠다를 의미

app.get('/', function (req, res) {
  res.render('dynamic');
  // res.render('practice', {
  //   Info: req.query,
  // });
});

//////////////////////////////////////////////////////

app.get('/ajax', (req, res) => {
  console.log(req.query);
  //노드 이용하기 때문에  브라우저에서 확인할수 없고 콘솔에서 확인 가능
  res.send(req.query);
});

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

const realid = 'banana';
const realpw = '4321';

app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
});
