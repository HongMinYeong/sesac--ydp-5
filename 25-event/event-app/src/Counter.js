//Counter.js
import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0); //0으로 초기화

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} ~ 현재 숫자는 ${number} 입니다.!`);
  };
  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg} ~ 현재 숫자는 ${number} 입니다.`);
  };

  //currentTarget 은 이벤트 핸들러가 있는 요소
  //e.target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식요소

  const handleEvent = (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
  };
  return (
    <div>
      <h1>Number counter</h1>
      <h2>{number}</h2>

      {/* 함수에 인자가 없는 경우 : 함수 이름만 전달  */}
      <button onClick={increase}>더하기</button>

      {/* 함수에 인자가 있는 경우  : 함수에 인자 보내기 , 인자를 보낼 때는 화살표함수 ! */}
      <button onClick={() => alertMsg('helloooo')}>alert 출력 </button>
      <button onClick={(e) => consoleMsg(e, 'helloooo')}>console 출력 </button>

      {/* e.target vs e.currentTarget */}
      <button onClick={handleEvent}>
        <span>handleEvent</span>{' '}
      </button>
    </div>
  );
};

export default Counter;
