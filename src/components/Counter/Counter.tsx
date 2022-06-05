import React, { useContext, useEffect } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

export const Counter = () => {
  const { count, handleIncrement, handleDecrement } = useContext(CounterContext);

  useEffect(() => {
    console.log('Counter component has loaded.');
  }, []);

  return (
    <>
      <h3>Counter</h3>
      <button onClick={handleIncrement} title="Increment" type="button">
        +
      </button>
      <span style={{ margin: '0px 8px' }}>{count}</span>
      <button onClick={handleDecrement} title="Decrement" type="button">
        -
      </button>
    </>
  );
};
