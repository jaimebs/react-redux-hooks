import { actionTypes } from '../constants/counter';

const actions = {
  increment: () => ({
    type: actionTypes.COUNTER_INCREMENT
  }),
  decrement: () => ({
    type: actionTypes.COUNTER_DECREMENT
  })
};

export { actions };
