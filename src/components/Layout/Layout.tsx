import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1>React State Management Example</h1>
      <div>{children}</div>
    </div>
  );
};
