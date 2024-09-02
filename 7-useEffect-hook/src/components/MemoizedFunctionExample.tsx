import React, { useState, useEffect, useCallback } from 'react';

const MemoizedFunctionExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useCallback(() => {
        console.log('Expensive calculation');
        return count * 2;
    }, [count]); // `expensiveCalculation` only changes when `count` changes

    useEffect(() => {
        console.log('Effect runs because count changed');
        const result = expensiveCalculation();
        console.log(result);
    }, [expensiveCalculation]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default MemoizedFunctionExample;

// useCallback: The useCallback hook is used to memoize the expensiveCalculation function,
// ensuring that it only changes when count changes. This prevents unnecessary re-renders.