import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

export const DisplayCounterValue = () => {
  const { count } = useContext(CounterContext);

  return <div>Current count is: {count}</div>;
};
