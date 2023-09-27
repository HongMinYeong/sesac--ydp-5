import { useState } from 'react';

const ChangeColor = () => {
  const [state, setState] = useState('검정색 글씨');
  const [style, setStyle] = useState({ color: 'black' });

  const Red = () => {
    setState('빨간색 글씨');
    setStyle({ color: 'red' });
  };

  const Blue = () => {
    setState('파란색 글씨');
    setStyle({ color: 'blue' });
  };

  return (
    <div>
      <h1 style={style}>{state}</h1>
      <button onClick={Red}>빨간색</button>
      <button onClick={Blue}>파란색</button>
    </div>
  );
};

export default ChangeColor;
