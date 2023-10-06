import React from 'react';
import PostItem from './PostItem';

//부모 컴포넌트
export default function PostList() {
  return (
    <div style={{ background: 'blue' }}>
      <h1>Post List</h1>
      <PostItem />
    </div>
  );
}
