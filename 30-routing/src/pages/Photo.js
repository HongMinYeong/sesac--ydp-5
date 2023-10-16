import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Photo() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: { _limit: 10 },
    });
    setPost(res.data);
    console.log(res.data);
  };

  return (
    <div>
      <div>여기는 사진목록</div>
      {post.map((post) => (
        <ul key={post.id}>
          <li>
            <h3>사진 제목 : {post.title}</h3>
            <img
              style={{ width: '200px', height: '200px' }}
              src={post.url}
              alt={post.alt}
            ></img>
          </li>
        </ul>
      ))}
    </div>
  );
}
