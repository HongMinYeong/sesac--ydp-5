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
const indexRouter = require('./routes/user');
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

app.get('*', (req, res) => {
  res.render('404');
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
