import React, { Component } from 'react';
import PropTypes from 'prop-types';

class classpr extends Component {
  render() {
    const { text, valid } = this.props;
    console.log({ valid });
    return (
      <div>
        <h1> {text} ! </h1>
        <button onClick={valid}></button>
      </div>
    );
  }
}

classpr.defaultProps = {
  text: '이건 기본 text props입니다',
};

//default 도 없어야 isRequired 동작함
classpr.propTypes = {
  text: PropTypes.string.isRequired,
};

export default classpr;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Props_ex1 extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Props_ex1.defaultProps = {
  text: '이건 기본 text props입니다.',
};
