import React, { useState } from 'react';

const KeyDownExample: React.FC = () => {
    const [message, setMessage] = useState<string>('Press any key...');

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setMessage(`Key pressed: ${event.key}`);
    };

    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} />
            <p>{message}</p>
        </div>
    );
};

export default KeyDownExample;