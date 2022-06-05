import { useEffect, useState } from 'react';

export interface UseCounterResult {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const useCounter = (): UseCounterResult => {
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

  return { count, handleIncrement, handleDecrement };
};
