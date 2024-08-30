import React from 'react';

const Greeting: React.FC = () => {
    return <h1>Hello, World!</h1>;
};

export default Greeting;


// Uses the => syntax.
// this refers to the context in which the function is defined, not where it is invoked (important for handling state and props in React).
// Typically more concise, especially for simple components.