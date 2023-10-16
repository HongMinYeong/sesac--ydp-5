import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to={'/'}> 홈으로 이동하기 </Link>
      {/* a태그는 처음부터 다불러옴  */}
      {/* <a href="http://localhost:3000">a 태그로 홈 이동</a> */}
    </div>
  );
}
