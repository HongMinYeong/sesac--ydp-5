import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Statepractice from './statepractice';
import Statepractice2 from './Statepractice2';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value={'Plus 1'} />
      <hr />
      <Statepractice />
      <hr />
      <Statepractice2 />
    </div>
  );
}

export default App;
