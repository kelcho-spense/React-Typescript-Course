import React, { useState } from 'react';

const IfElseExample: React.FC = () => {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

    const renderContent = () => {
        if (status === 'loading') {
            return <p>Loading...</p>;
        } else if (status === 'success') {
            return <p>Data loaded successfully!</p>;
        } else if (status === 'error') {
            return <p>Failed to load data.</p>;
        } else {
            return null;
        }
    };

    return (
        <div>
            {renderContent()}
            <button onClick={() => setStatus('loading')}>Set Loading</button>
            <button onClick={() => setStatus('success')}>Set Success</button>
            <button onClick={() => setStatus('error')}>Set Error</button>
        </div>
    );
};

export default IfElseExample;