const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('cookie');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
