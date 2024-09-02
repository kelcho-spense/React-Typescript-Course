import React, { useState, useRef, useEffect } from 'react';

const RenderCounter: React.FC = () => {
    const [count, setCount] = useState(0);
    const renderCountRef = useRef(0);

    useEffect(() => {
        renderCountRef.current += 1; // Increment render count on every render
    });

    return (
        <div>
            <p>Render count: {renderCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Re-render</button>
        </div>
    );
};

export default RenderCounter;

// Counting Renders: The renderCountRef.current value is incremented on every render via useEffect, providing a way to count the number of renders.
// Mutable Ref: Since useRef doesn’t cause re-renders when updated, it’s ideal for tracking things like render counts.