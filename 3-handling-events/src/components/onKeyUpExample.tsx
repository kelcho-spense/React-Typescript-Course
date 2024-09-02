import React, { useState } from 'react';

const KeyUpExample: React.FC = () => {
    const [message, setMessage] = useState<string>('Release a key...');

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setMessage(`Key released: ${event.key}`);
    };

    return (
        <div>
            <input type="text" onKeyUp={handleKeyUp} />
            <p>{message}</p>
        </div>
    );
};

export default KeyUpExample;