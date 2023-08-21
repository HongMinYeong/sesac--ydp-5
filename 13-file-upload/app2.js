// 파일 업로드 실습파일
const express = require('express');
const app = express();
const PORT = 8080;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); //경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

// 실습 multer 세부 설정
const Detail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      done(null, path.basename(req.body.userid, ext) + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
// static 미들웨어 등록
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('practice');
});
app.post('/result', Detail.single('profile'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const fileName = req.file.filename;
  const srcc = '/' + req.file.destination + fileName;
  res.render('result', {
    userInfo: req.body,
    srcc,
  });
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
