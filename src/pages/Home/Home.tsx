import React, { useEffect, useState } from 'react';
import { Counter } from '../../components/Counter/Counter';
import { DisplayCounterValue } from '../../components/DisplayCounterValue/DisplayCounterValue';
import { useCounter } from '../../hooks/useCounter';

export const HomePage = () => {
  // Step 5: Abstract our state logic into a custom hook
  const { count, handleDecrement, handleIncrement } = useCounter();

  return (
    <div>
      <h2>Home</h2>
      <Counter count={count} onDecrement={handleDecrement} onIncrement={handleIncrement} />
      <DisplayCounterValue count={count} />
    </div>
  );
};
