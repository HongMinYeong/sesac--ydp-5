import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Test extends Component {
  //   student = '홍민영';
  name = '홍민영';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12',
  };
  //클래스형 컴포넌트는 render함수 필수
  render() {
    return <div style={this.my_style}>{this.name}</div>;
  }
  //   static defaultProps = {
  //     name: '기본 이름',
  //   };
  //   static propTypes = {
  //     name: PropTypes.string,
  //   };
}

// ClassComponent.defaultProps = {
//   name: '홍미녕',
// };

//default 도 없어야 isRequired 동작함
Test.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Test;
