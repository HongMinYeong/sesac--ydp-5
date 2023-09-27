import React, { Component } from 'react';

class Statepractice extends Component {
  //현재 버전
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>Number: {number}</h1>
        <button
          onClick={() => {
            // 직접 변경 불가능, setState를 사용해야함
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            // 직접 변경 불가능, setState를 사용해야함
            this.setState({ number: number - 1 });
          }}
        >
          -1
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
export default Statepractice;
