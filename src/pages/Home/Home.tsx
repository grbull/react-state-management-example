import React, { useEffect, useState } from 'react';
import { Counter } from '../../components/Counter/Counter';
import { DisplayCounterValue } from '../../components/DisplayCounterValue/DisplayCounterValue';
import { useCounter } from '../../hooks/useCounter';

export const HomePage = () => {
  // Step 6: Demo the re-usability of a custom hook
  const counter1 = useCounter();
  const counter2 = useCounter();

  return (
    <div>
      <h2>Home</h2>
      <Counter count={counter1.count} onDecrement={counter1.handleDecrement} onIncrement={counter1.handleIncrement} />
      <DisplayCounterValue count={counter1.count} />

      <Counter count={counter2.count} onDecrement={counter2.handleDecrement} onIncrement={counter2.handleIncrement} />
      <DisplayCounterValue count={counter2.count} />
    </div>
  );
};
