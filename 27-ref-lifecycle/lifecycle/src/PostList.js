import React from 'react';
import PostItem from './PostItem';
import './post.scss';

//부모 컴포넌트
export default function PostList() {
  return (
    <div className="header">
      <h1>Post List</h1>
      <PostItem />
    </div>
  );
}
