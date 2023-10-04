import React, { useState, useRef } from 'react';

export default function RefPr() {
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const inputRefName = useRef();
  const inputRefTitle = useRef();

  const addData = () => {
    if (inputName.trim() === '') {
      return inputRefName.current.focus();
    } else if (inputTitle.trim() === '') {
      return inputRefTitle.current.focus();
    }
    const newData = data.concat({
      id: data.length + 1,
      name: inputName,
      title: inputTitle,
    });
    setData(newData);
    setInputTitle('');
    setInputName('');
  };
  const searchData = (targetName) => {
    search = data.filter((value) => value.name === targetName);
    setSearch(search);
  };
  return (
    <div>
      <fieldset>
        <label for="writer">작성자 :</label>
        <input
          type="text"
          value={inputName}
          placeholder="작성자"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          ref={inputRefName}
        />
        <label for="title"> 제목 : </label>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          ref={inputRefTitle}
        />
        <button onClick={addData}> 작성</button>
      </fieldset>
      <br />
      <br />

      <div>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>작성자</td>
        </tr>

        {data.map((value) => (
          <tr>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.name}</td>
          </tr>
        ))}
      </div>
    </div>
  );
}
