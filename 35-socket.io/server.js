const express = require('express');
const http = require('http'); //내장 모듈
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app); //express 앱으로 http 서버 생성
const io = socketIO(server);
const PORT = 8080;

//사용자 닉네임 모음 객체
const nickObjs = {}; //{socket.id:nick1,socket.id:nick2}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

function updateList() {
  io.emit('updateNicks', nickObjs); // 전체 사용자 닉네임 모음 객체 전달
}

//최초 연결
//io.on(): socket 관련한 통신 작업으 처리
io.on('connection', (socket) => {
  //connection 이벤트는 클라이언트가 접속했을 때 발생
  //콜백 함수의 인자로 소켓 객체를 제공
  console.log(`서버 연결되었습니다.:${socket.id}`); //콜백으로 클라이언트 소켓정보를 받아옴
  let sockets = [];
  sockets.push(socket.id);
  console.log(sockets);

  //[실습3-2]
  //emit() from server
  // - socket.emit(event_name,data) : 해당 클라이언트에게만 이벤트, 데이터를 전송

  // - io.emit(event_name,data): 서버에 접속된 모든 클라이언트 전송
  socket.on('setNick', async (nick) => {
    console.log(`닉네임 설정 완료 :: ${nick} 님 입장`);
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      nickObjs[socket.id] = nick;
      console.log('접속 유저 목록 ::', nickObjs);
      io.emit('joinRoom', `${nick}님이 입장하셨습니다.`);
      socket.emit('entrySuccess', nick); //해당 소켓ㅅ 데이ㅓ터 전송
      updateList();
    }
    // const nickObjs = {}; //{socket.id:nick1,socket.id:nick2}
  });
  socket.on('joinRoom', async (name, id, cb) => {
    try {
      console.log('클라이언트', id);
      const user = sockets.includes(id);
      console.log('user는', user);
      if (user) {
        const welcomeMessage = {
          chat: `${name}님이 입장하셨습니다.`,
          msg: 'system',
        };
        console.log('환영', welcomeMessage);

        cb({ isOk: true, data: welcomeMessage });
      }
    } catch (error) {
      console.log('에러당', error);
      cb({ isOk: false, error: error.message });
    }
  });

  //[실습4] 채팅창 메세지 전송 step1
  //send 이벤트를 받아서
  //모두에게 newMessage 이벤트로 {닉네임,입력창내용} 데이터를 전송
  socket.on('sendMessage', (nickName, msg) => {
    try {
      // `${nickName} : ${msg}`;
      io.emit('message', async (cb) => {
        cb({ isOk: true, data: `${nickName} : ${msg}`, isMine: nickObjs });
      });
    } catch (error) {
      console.error('에러당!', error);
    }
  });

  //   socket.on('meow', (data) => {
  //     console.log(`${data.who} 가 ${data.msg} 보냄`);
  //     socket.emit('helloCat', { who: `고양이`, msg: '먀아앙아아아옹ㅇ옹' });
  //   });

  //   socket.on('bow', (data) => {
  //     console.log(`${data.who} 가 ${data.msg} 보냄`);
  //     socket.emit('helloDog', {
  //       who: '강아지',
  //       msg: '월월으르으르으르를ㅇ러멍멍',
  //     });
  //   });

  //   socket.on('mingle', (data) => {
  //     console.log(`${data.who} 가 ${data.msg} 보냄`);
  //     socket.emit('helloBaby', {
  //       who: '애기석민',
  //       msg: '힝앵애힝앵애힝앵애힝앵애힝앵애힝앵애',
  //     });
  //   });
  //[실습 3-3 ] 클라이언트 퇴장시
  // "notice" 이벤트

  socket.on('disconnect', () => {
    console.log(`${nickObjs[socket.id]}클라이언트와 연결이 종료되었습니다.`);
    io.emit('notice', `${nickObjs[socket.id]}님이 퇴장하셨습니다.`);
    delete nickObjs[socket.id];
    updateList();
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
