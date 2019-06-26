import { actionTypes } from '../constants/counter';

const INITIAL_STATE = {
  counter: 0
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case actionTypes.COUNTER_DECREMENT:
      if (state.counter <= 0) return { ...state, counter: 0 };
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

export { reducers };
