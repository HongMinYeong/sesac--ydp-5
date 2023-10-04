import React from 'react';
import { useState } from 'react';

//정답 코드
function Result(props) {
  console.log(props);
  const { fruit, background, color, content } = props.data; //props의 데이터 구조분해
  return (
    <div style={{ display: 'block' }}>
      <img src={`${fruit}.png`} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Result;

// function Result({ Text, backgroundColor, TextColor, Fruit }) {
//   return (
//     <div style={{ display: 'block' }}>
//       <img src={`${Fruit}.png`} width={100} height={100} />

//       <div
//         style={{
//           padding: '10px',
//           marginTop: '10px',
//           backgroundColor: backgroundColor,
//           color: TextColor,
//         }}
//       >
//         {Text}
//       </div>
//     </div>
//   );
// }

// export default Result;
