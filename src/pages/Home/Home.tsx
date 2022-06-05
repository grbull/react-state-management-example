import React, { useEffect, useState } from 'react';
import { Counter } from '../../components/Counter/Counter';
import { DisplayCounterValue } from '../../components/DisplayCounterValue/DisplayCounterValue';

export const HomePage = () => {
  // Step 4: Lift the state to a parent component and use callback functions
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log('Count has changed to ' + count + '.');
  }, [count]);

  return (
    <div>
      <h2>Home</h2>
      <Counter count={count} onDecrement={handleDecrement} onIncrement={handleIncrement} />
      <DisplayCounterValue count={count} />
    </div>
  );
};
