import { createContext } from 'react';
import { UseCounterResult } from '../hooks/useCounter';

const defaultCounterContext: UseCounterResult = {
  count: 0,
  handleDecrement: () => null,
  handleIncrement: () => null,
};

export const CounterContext = createContext<UseCounterResult>(defaultCounterContext);
