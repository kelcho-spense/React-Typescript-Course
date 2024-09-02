import React, { useState, useEffect } from 'react';

const ExampleComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Dependency array ensures this effect runs only when count changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

export default ExampleComponent;

// Side Effect: In this example, useEffect is used to update the document title whenever count changes.

// Dependency Array: The effect will run only when the value of count changes, preventing unnecessary updates.