//ClassBind.js
import { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log('constructor this : ', this);
    this.state = {
      name: 'sesac',
    };
    // #1 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
    // this 를 쓰기 위해서 bind
    // -js 에서는 this를 호출하는 방법에 의해 결정
    //      => 함수가 호출될 때마다 this가 다를 수 있다.
    // bind() 메서드는 호출되는 방법과 무관하게 this를 묶어버림

    //1 ) bind 사용시
    this.printConsole = this.printConsole.bind(this);
  }
  // 1) bind 사용시
  printConsole() {
    console.log('bind 사용시 this 는 ', this);
    console.log('bind 사용시 this.state 는 ', this.state);
  }

  //2) 화살표함수 사용시
  // 클래스 컴포넌트에서 이벤트 쓰기 - 두번째 방법 화살표 함수 사용
  // 화살표 함수는 this 가 없음 ! 선언될 시점에 상위 스코프가 this 로 바인딩
  //   printConsole = () => {
  //     console.log('화살표 함수에서 this', this);
  //   };

  printConsole2 = (msg) => {
    console.log('msg는', msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자X)</button>
        {/* <button onClick={() => this.printConsole2('미농')}>
          printConsole(인자O)
        </button> */}
        <button onClick={this.printConsole2.bind(null, '미농')}>
          printConsole(인자O)
        </button>
      </div>
    );
  }
}

export default ClassBind;
