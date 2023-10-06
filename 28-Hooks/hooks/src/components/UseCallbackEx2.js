import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
  //props 바로 구조분해
  const [post, setPost] = useState({});
  //[before]
  //   const getPost = async () => {
  //     console.log('data fetching ...');
  //     //데이터 요청
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     setPost(res.data);
  //   };

  //[after]
  //useCallback 훅으로 메모이제이션 -> 의존성 배열에 있는 postId가 변경되지 않는 한
  //컴포넌트는 리렌더링되지 않음
  //-> 필요한 순간에만 api 요청을 날림!!
  const getPost = useCallback(async () => {
    console.log('data fetching ...');
    //데이터 요청
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(res.data);
  }, [postId]);

  //useEffect 의존성 배열에 "함수"
  //컴포넌트가 리렌더링 -> 함수 재생성(주소값 변경) -> getPost 재호출
  useEffect(() => {
    getPost();
  }, [getPost]); // 주소값이 바뀔 때마다 계속 함수 호출됨

  return (
    <div>
      <h1>UseCallback Ex2</h1>
      {/* post에 id 값이 존재한다면 */}
      {post.id ? post.title : '로딩중 ...'}
    </div>
  );
}
