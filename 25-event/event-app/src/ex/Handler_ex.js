//ClassBind.js
import { Component } from 'react';

class Handler_ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'Hello World!',
    };
    this.bye = this.bye.bind(this);
  }

  bye = () => {
    this.setState({ state: 'Goodbye World!' });
  };
  render() {
    const { state } = this.state;
    return (
      <div>
        <h1>{state}</h1>
        <br />
        <button onClick={this.bye}>change</button>
      </div>
    );
  }
}

export default Handler_ex;
