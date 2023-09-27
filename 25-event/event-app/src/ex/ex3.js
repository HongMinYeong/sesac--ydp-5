import { useState } from 'react';

const Ex3 = () => {
  const [state, setState] = useState('안녕하세요');
  //   const [style, setStyle] = useState({ color: 'black' });

  const Disappear = () => {
    setState('');
  };

  return (
    <div>
      <button onClick={Disappear}>사라져라</button>
      <h1>{state}</h1>
    </div>
  );
};

export default Ex3;
