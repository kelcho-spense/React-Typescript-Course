import React from 'react';

const EnterKeyExample: React.FC = () => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    };

    return <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />;
};

export default EnterKeyExample;