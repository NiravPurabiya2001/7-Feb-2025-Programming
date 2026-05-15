import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store';

export const ReduxCounter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Redux Counter: {count}</h4>
      <button onClick={() => dispatch(increment())}>Redux Increment</button>
      <button onClick={() => dispatch(decrement())}>Redux Decrement</button>
    </div>
  );
};
