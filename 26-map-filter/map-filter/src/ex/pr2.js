import React, { useState } from 'react';

export default function Pr2() {
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const addData = () => {
    const newData = data.concat({
      id: data.length,
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
        />
        <label for="title"> 제목 : </label>
        <input
          type="text"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
        <button onClick={addData}> 작성</button>
      </fieldset>
      <br />
      <br />
      <select>
        <option value={inputName} selected>
          작성자
        </option>
        <option value={inputTitle}>제목</option>
      </select>
      <input type="text" placeholder="검색어" />
      {data.map((value) => {
        <button onClick={() => searchData(value.name)}>검색</button>;
      })}
      <div>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>작성자</td>
        </tr>

        {data.map((value) => (
          <tr>
            <td>{data.length}</td>
            <td>{value.title}</td>
            <td>{value.name}</td>
          </tr>
        ))}
      </div>
    </div>
  );
}
