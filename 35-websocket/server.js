const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8080;
// const SOCKET = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const wss = new ws.Server({ server });

const sockets = []; //클라이언트들을 저장할 배열

//최초 연결
wss.on('connection', (socket) => {
  console.log(`클라이언트가 연결되었습니다.:${socket}`); //콜백으로 클라이언트 소켓정보를 받아옴
  sockets.push(socket);
  socket.on('message', (message) => {
    console.log(`클라이언트로 부터 받은 메시지 -> ${message}`);
    //웹 소켓 서버에 접속한 모든 클라이언트(브라우저 탭) 에게 메세지 전송
    //= 브로드 캐스팅(여러 컴퓨터한테 데이터 전송)
    sockets.forEach((socket) => {
      socket.send(`${message}`);
    });
  });
  socket.on('error', (error) => {
    console.error('오류가 발생했습니다.', error);

    socket.on('close', () => {
      console.log('클라이언트와 연결이 종료되었습니다.');
    });
  });
});
