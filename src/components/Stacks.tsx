import { useMdxComponentsContext } from '@/context/mdxContext';
import React from 'react';

const Stacks: React.FC = () => {
  const stacks = useMdxComponentsContext().stacks;
  return (
    <>
      <h2>Stacks</h2>
      <ol>
        {stacks.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ol>
    </>
  );
};

export default Stacks;
