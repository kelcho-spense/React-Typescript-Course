import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Initialize state with type annotation

  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;