import { useState } from 'react';

//정답코드
function Input(props) {
  const setData = props.setData;

  const handleInput = (e) => {
    const content = e.target.value;

    setData((data) => {
      console.log(data); //이전 state 값
      // return { ...data, content: content };
      return { ...data, content }; //나머지는 그대로 content 바뀜
    });
  };

  return (
    <>
      내용 :{' '}
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;

// function Input({ setText }) {
//   return (
//     <>
//       내용 :{' '}
//       <input
//         type="text"
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//         placeholder="내용을 입력하세요."
//       />
//     </>
//   );
// }

// export default Input;
