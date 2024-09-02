import React, { useState } from 'react';

const SwitchExample: React.FC = () => {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

    const renderContent = () => {
        switch (status) {
            case 'loading':
                return <p>Loading...</p>;
            case 'success':
                return <p>Data loaded successfully!</p>;
            case 'error':
                return <p>Failed to load data.</p>;
            default:
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

export default SwitchExample;