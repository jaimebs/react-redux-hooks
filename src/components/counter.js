import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions/counter';
import { selectors } from '../selectors/counter';

const Counter = () => {
  const counter = useSelector(selectors.getCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(actions.increment());
  const handleDecrement = () => dispatch(actions.decrement());

  return (
    <>
      <h1>Counter: {counter}</h1>
      <ul>
        <li>
          <button onClick={handleIncrement}>Increment</button>
        </li>
        <li>
          <button onClick={handleDecrement}>Decrement</button>
        </li>
      </ul>
    </>
  );
};

export default Counter;
