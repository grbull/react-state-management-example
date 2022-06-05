import React, { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('Counter component has loaded.');
  }, []);

  useEffect(() => {
    console.log('Count has changed to ' + count + '.');
  }, [count]);

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
