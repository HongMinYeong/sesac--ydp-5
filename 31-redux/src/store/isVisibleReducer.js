const CHANGE = 'counter/CHANGE';

export const visible = () => ({ type: CHANGE });

const initialState = false;

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state;
  }
  return state;
};

export default isVisibleReducer;
