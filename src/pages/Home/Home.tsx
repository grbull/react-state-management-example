import React from 'react';
import { Counter } from '../../components/Counter/Counter';
import { DisplayCounterValue } from '../../components/DisplayCounterValue/DisplayCounterValue';

export const HomePage = () => {
  return (
    <div>
      <h2>Home</h2>
      <Counter />
      {/* Step 3: How can we display the current count in an adjacent or sibling component? */}
      <DisplayCounterValue count={0} />
    </div>
  );
};
