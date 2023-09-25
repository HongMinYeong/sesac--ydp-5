import React, { Component } from 'react';
import wawa from './wawa.jpeg';

class Test2 extends Component {
  student = '홍민영';
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: 20,
  };
  //클래스형 컴포넌트는 render함수 필수
  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요</h2>
        <img src={wawa}></img>
      </div>
    );
  }
}

export default Test2;
