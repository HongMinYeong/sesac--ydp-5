import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';
import { useState } from 'react';
import { plus, minus } from './store/accountReducer';
function Bank() {
  const [input, setInput] = useState('');
  const money = useSelector((state) => state.money.money);
  const dispatch = useDispatch();
  const moneyPlus = (input) => {
    dispatch(plus(input));
    setInput('');
  };
  const moneyMinus = (input) => {
    dispatch(minus(input));
    setInput('');
  };
  console.log(input);
  return (
    <div>
      <h1>React Redux 실습</h1>
      <hr />
      <h2>잔액: {money}원</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => moneyPlus(input)}>입금</button>
      <button onClick={() => moneyMinus(input)}>출금</button>
    </div>
  );
}

export default Bank;
