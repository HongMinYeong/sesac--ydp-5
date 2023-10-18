const PLUS = 'bank/PLUS';
const MINUS = 'bank/MINUS';

export const plus = (input) => ({ type: PLUS, payload: input });
export const minus = (input) => ({ type: MINUS, payload: input });

//state 초기값 정의
const initialState = {
  money: 0,
};
//reducer 정의: 변화를 일으키는 함수
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { money: state.money + parseInt(action.payload) };
    case MINUS:
      return { money: state.money - parseInt(action.payload) };
    default:
      return state;
  }
};

export default accountReducer;
