//LifeCycleFuncChild.js
import React, { useState, useEffect } from 'react';

//자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');
  //구조분해하면서 바로 number 꺼내오기
  // 의존성배열 있을 때
  // useEffect(() => {
  //   //Mount 시점에 실행
  //   console.log('컴포넌트 마운트!!');
  // }, []);

  // //unmount 시점에 실행
  // useEffect(() => {
  //   return () => {
  //     console.log('컴포넌트 언마운트!!');
  //   };
  // }, []);

  // //의존성배열 없을 때
  // //Mount or Update 시점에 실행
  // useEffect(() => {
  //   console.log('컴포넌트 마운트 or 업데이트!');
  // });

  // //input 상태가 업데이트될때 실행
  // useEffect(() => {
  //   console.log('마운트 or input 상채가 변경됨에 따라 컴포넌트 업데이트');
  // }, [input]);
  return (
    <div style={{ background: 'gold' }}>
      자식 컴포넌트
      <div>현재 Number 값은 {number} 입니다. </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </div>
  );
}
