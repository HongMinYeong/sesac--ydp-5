import { useState } from 'react';

const Statepractice2 = () => {
  const [number, setNumber] = useState(0);

  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 2);
  };

  return (
    <div>
      {/* 
            - HTML : onclick = "onClickEvent() " -> 문자열 형식으로 호출문 등록 
            - js : addEventListener('click',onClickEvent) -> 괄호를 없애 함수를 바로 실행하지 않고, 클릭 발생했을 때 함수 호출되도록 
            - React : onClick = {onClickEvent} -> JS와 동일
        */}
      <button onClick={Increase}>Increase ( + 1)</button>
      <button onClick={Decrease}>Decrease ( - 2)</button>
      <h1>{number}</h1>
    </div>
  );
};

export default Statepractice2;
