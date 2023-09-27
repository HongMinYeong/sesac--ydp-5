import React, { Component } from 'react';

class Counter extends Component {
  //기존 버전
  //   constructor(props) {
  //     //js에서 'super' 는 부모클래스 생성자의 참조
  //     //super() 호출 시 현재 클래스가 상속받고 있는 리액트의 Component 클래스가 지닌 생서자 함수를 호출
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };
  //   }
  //현재 버전
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>Number: {number}</h1>
        {/* <h1>Number: {this.state.number}</h1> ->구조분해할당 안했을 때 */}
        <button
          onClick={() => {
            // 직접 변경 불가능, setState를 사용해야함
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            alert(number);
          }}
        >
          Number
        </button>
      </div>
    );
  }
}
export default Counter;
