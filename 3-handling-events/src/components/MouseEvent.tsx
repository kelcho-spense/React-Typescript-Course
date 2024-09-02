import React from 'react';

const MouseEvent: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked!');
    };

    return <button onClick={handleClick}>Click me</button>;
};

export default MouseEvent;