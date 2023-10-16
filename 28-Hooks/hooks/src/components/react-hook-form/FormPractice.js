import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, //input 할당, value 변경 감지
    handleSubmit, //form submit 시 호출
    formState: { errors }, //폼 상태 객체
    watch, //특정 폼 필드의 값을 실시간으로 사용
  } = useForm();
  //handleSubmit(funcA[,funB]): 두개의 함수를 받음
  // -funcA:필수, 유효할 때 실행
  // -funcB:선택, 유효하지 않을 때 실행
  const onValid = (data) => {
    console.log('onValid', data); //onValid {username: '홍', email: 'minyung1240@daum.net'}
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  console.log('errors', errors);
  console.log('watch', watch('username'));
  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름은 필수 항목입니다',
          })}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            validate: {
              isPositive: (v) => v >= 0 || '0 이상의 숫자만 입력 가능합니다',
            },
          })}
        />
        {errors.age?.message}
        <br />

        <button type="submit">제출</button>
      </form>
    </div>
  );
}
