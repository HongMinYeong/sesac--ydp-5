import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode')); //xxx.get('키값');

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>MainPage</h1>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
        {/* http://localhost:3000/?mode=Dark -> 쿼리스트링 추가됨  */}
        {/* 쿼리 사용 -> 검색어  */}
      </button>
    </div>
  );
}
