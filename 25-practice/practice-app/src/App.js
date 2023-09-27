import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  const [Text, setText] = useState('안녕');
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [TextColor, setTextColor] = useState('white');
  const [Fruit, setFruit] = useState('apple');
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select
          setBackgroundColor={setBackgroundColor}
          setTextColor={setTextColor}
          setFruit={setFruit}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setText={setText} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result
          Text={Text}
          backgroundColor={backgroundColor}
          TextColor={TextColor}
          Fruit={Fruit}
        />
      </div>
    </>
  );
}

export default App;
