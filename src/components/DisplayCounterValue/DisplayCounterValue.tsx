import React from 'react';

interface Props {
  count: number;
}

export const DisplayCounterValue = ({ count }: Props) => {
  return <div>Current count is: {count}</div>;
};
