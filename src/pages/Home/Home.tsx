import React from 'react';
import { Counter } from '../../components/Counter/Counter';
import { DisplayCounterValue } from '../../components/DisplayCounterValue/DisplayCounterValue';
import { CounterContext } from '../../contexts/CounterContext';
import { useCounter } from '../../hooks/useCounter';

export const HomePage = () => {
  // Step 7: Introduce context hook
  const counter = useCounter();

  return (
    <div>
      <h2>Home</h2>
      <CounterContext.Provider value={counter}>
        <Counter />
        <DisplayCounterValue />
      </CounterContext.Provider>
    </div>
  );
};
