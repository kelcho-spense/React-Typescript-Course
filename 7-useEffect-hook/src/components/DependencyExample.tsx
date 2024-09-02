import React, { useState, useEffect } from 'react';

const DependencyExample: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]); // Effect only runs when `count` changes

    useEffect(() => {
        console.log('Text changed:', text);
    }, [text]); // Effect only runs when `text` changes

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </div>
    );
};

export default DependencyExample;

// Specific Dependencies: Two separate useEffect hooks manage different states (count and text). 
// Each hook only runs when its respective state changes.

// Avoiding Unnecessary Effects: By specifying dependencies, you prevent effects from running when they don’t need to, improving performance.