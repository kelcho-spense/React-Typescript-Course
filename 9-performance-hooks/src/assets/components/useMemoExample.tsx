import React, { useState, useMemo } from 'react';

const ExpensiveComponent: React.FC<{ count: number }> = ({ count }) => {
    const computeExpensiveValue = (num: number) => {
        for (let i = 0; i < 10000; i++) {
            // Simulate expensive computation
        }
        console.log('Computing expensive value...');

        return num * 2;
    };

    const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);

    return <p>Computed Value: {memoizedValue}</p>;
};

const ParentComponent: React.FC = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <ExpensiveComponent count={count} />
        </div>
    );
};

export default ParentComponent;