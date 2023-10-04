import React, { useState } from 'react';

export default function Alphabet() {
  //   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [alphabet, setAlphabet] = useState([
    //배열의 원소가 객체로 바뀜
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');
  const addAlpha = () => {
    // [퀴즈] input 이 빈값이라면 alpha 상태 안변하게
    if (inputAlpha.trim() === '') {
      return;
    }
    // if (inputAlpha.length === 0) {
    //   return;
    // }
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlpha);
    setInputAlpha('');
  };

  const deleteAlpha = (targetId) => {
    //targetId : 삭제될 요소의 id
    console.log(targetId);
    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };
  const handleKeyEvent = (e) => {
    console.log(e);
    if (e.code === 'Enter') {
      addAlpha();
    }

    if (e.keyCode === 13) {
      addAlpha();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        //[퀴즈] input 에서 enter 키 누르면 추가되도록!
        onKeyDown={(e) => handleKeyEvent(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
