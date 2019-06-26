import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../actions/counter';

const Counter = ({ counter, decrement, increment }) => (
  <>
    <h1>Counter: {counter}</h1>
    <ul>
      <li>
        <button onClick={increment}>Increment</button>
      </li>
      <li>
        <button onClick={decrement}>Decrement</button>
      </li>
    </ul>
  </>
);

const mapStateToProps = state => ({
  counter: state.counterReducers.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
