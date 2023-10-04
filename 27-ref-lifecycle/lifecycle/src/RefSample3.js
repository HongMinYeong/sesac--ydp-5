//RefSample3.js
import React, { Component } from 'react';

export default class RefSample3 extends Component {
  handleFocus = () => {
    console.log(this); //컴포넌트 자기자신
    this.inputRef.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리 </p>
        {/* 만들어진 변수 inputRef 해당 요소의 ref prop로 넣어주면 ref 설정 완료  */}
        <input
          ref={(ref) => {
            // inputRef : ref로 사용될 변수 이름
            this.inputRef = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
