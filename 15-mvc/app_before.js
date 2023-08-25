const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req, res) => {
  //req.params : 라우트 매개변수에 대한 정보가 담겨 있음
  //= res.render('comments', { comments: comments });
  res.render('comments', { comments });
});

app.get('/comment/:id', (req, res) => {
  console.log('req.params -> ', req.params); //req.params ->  { id: '1' }
  const cmtId = Number(req.params.id);

  //:id 변수에 0,7같은 존재하지 않는 id 접근시 404 페이지
  //   if (cmtId < 1 || cmtId > comments.length) {
  //     return res.render('404');
  //   }
  //:id 변수에 숫자가 아닌 값이 온다면 404 페이지
  //   if (isNaN(cmtId)) {
  //     return res.render('404');
  //   }
  // 또는
  //   if (typeof cmtId !== 'Number') {
  //     return res.render('404');
  //   }
  //   if (isNaN(cmtId) || cmtId < 1 || cmtId > comments.length) {
  //     return res.render('404');
  //   }
  //또는
  if (!comments[cmtId - 1]) {
    //undefined -> false
    res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
  //comments 배열안에 객체 찾아감
  //
});

//params 여러개 사용 가능
//http://localhost:8000/test/banana/바나나
app.get('/test/:id/:name', (req, res) => {
  console.log('req.params => ', req.params); //req.params =>  { id: 'banana', name: '바나나' }
  res.send('test res success!');
});

//404 Error 처리
//반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
