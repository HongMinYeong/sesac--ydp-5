import React, { useState } from 'react';

export default function Event_ex(name, email) {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [data, setData] = useState([
    //배열의 원소가 객체로 바뀜
    {
      name: '코디',
      email: 'codi@gmail.com',
    },
    { name: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);
  const addData = () => {
    const newData = data.concat({
      name: inputName,
      email: inputEmail,
    });
    setData(newData);
    setInputName('');
    setInputEmail('');
  };
  const deleteData = (targetName) => {
    const newData = data.filter((data) => data.name !== targetName);
    setData(newData);
  };
  const handleKeyEvent = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.code === 'Enter') {
      addData();
    }
  };
  return (
    <div>
      <input
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => handleKeyEvent(e)}
      />
      <button onClick={addData}>등록</button>
      <div>
        {data.map((value) => (
          <ol key={value.name} onDoubleClick={() => deleteData(value.name)}>
            {value.name}:{value.email}
          </ol>
        ))}
      </div>
    </div>
  );
}
