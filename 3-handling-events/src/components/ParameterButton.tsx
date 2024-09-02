import React from 'react';

const ParameterButton: React.FC = () => {
    const handleClick = (message: string, event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(message);
        console.log(event.clientX)
        console.log(event.clientY)
    };

    return (
        <button onClick={(event) => handleClick('Hello, world!', event)}>
            Click me with Parameter
        </button>
    );
};

export default ParameterButton;