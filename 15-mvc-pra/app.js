const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); // 뷰 폴더로 views/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter = require('./routes');
app.use('/', userRouter);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
