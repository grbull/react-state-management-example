import React, { useEffect } from 'react';

interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ count, onIncrement, onDecrement }: Props) => {
  useEffect(() => {
    console.log('Counter component has loaded.');
  }, []);

  return (
    <>
      <h3>Counter</h3>
      <button onClick={onIncrement} title="Increment" type="button">
        +
      </button>
      <span style={{ margin: '0px 8px' }}>{count}</span>
      <button onClick={onDecrement} title="Decrement" type="button">
        -
      </button>
    </>
  );
};
