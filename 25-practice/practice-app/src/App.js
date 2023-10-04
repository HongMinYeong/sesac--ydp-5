import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  //정답코드
  // 상태
  const [data, setData] = useState({
    //useState 리액트에서 import 해오기
    fruit: 'peach',
    background: 'gold',
    color: 'black',
    content: '복숭이',
  });
  return (
    // Select,Input은 상태변환! -> setData
    // Result 는 변한값 보여주깅
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Select setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        <Result data={data} />
      </div>
    </>
  );
}

export default App;

//   const [Text, setText] = useState('안녕');
//   const [backgroundColor, setBackgroundColor] = useState('black');
//   const [TextColor, setTextColor] = useState('white');
//   const [Fruit, setFruit] = useState('apple');
//   return (
//     <>
//       <div
//         style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
//       >
//         <Select
//           setBackgroundColor={setBackgroundColor}
//           setTextColor={setTextColor}
//           setFruit={setFruit}
//         />
//       </div>
//       <div
//         style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
//       >
//         <Input setText={setText} />
//       </div>
//       <div
//         style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
//       >
//         <Result
//           Text={Text}
//           backgroundColor={backgroundColor}
//           TextColor={TextColor}
//           Fruit={Fruit}
//         />
//       </div>
//     </>
//   );
// }

// export default App;
