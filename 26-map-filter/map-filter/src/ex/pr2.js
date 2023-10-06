import React, { useState } from 'react';

export default function Pr2() {
  //state 하나로 writer,title input을 동시에 관리 !
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    search: '',
  });
  const { writer, title, search } = inputs; //구조분해
  const [comments, setComments] = useState([
    {
      writer: '미녕',
      title: '하이',
    },
  ]);
  const [searchType, setSearchType] = useState('writer');
  const [result, setResult] = useState([]);
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, //ex. writer:d
    });
  };
  const addComment = () => {
    const newComment = {
      // writer:writer,
      // title:title,
      writer,
      title,
    };
    setComments([...comments, newComment]); //기존 + 추가할거 하나
    //input 초기화
    setInputs({
      // ...inputs,
      writer: '',
      title: '',
    });
  };
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  const searchComment = () => {
    const searchResult = comments.filter((cmt) => {
      //cmt :{title:xxx,writer:xxx}
      if (!cmt[searchType].includes(search)) {
        //검색결과가 없다면; null
        return null;
      } else {
        return cmt;
      }
    });
    setResult(searchResult);
    setInputs({
      ...inputs,
      search: '',
    });
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={writer}
          onChange={onChange}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name="type" value={searchType} onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={search}
          onChange={onChange}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((cmt, idx) => (
            <tr key={idx + 1}>
              <td>{idx + 1}</td>
              <td>{cmt.title}</td>
              <td>{cmt.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <table border={1} style={{ margin: '30px auto', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((cmt, idx) => (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}
