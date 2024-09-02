import React, { useState } from 'react';

const TernaryExample: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <div>
            {isLoggedIn ? (
                <p>Welcome back!</p>
            ) : (
                <p>Please log in.</p>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                Toggle Login State
            </button>
        </div>
    );
};

export default TernaryExample;

// Ternary Operator: {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>} 
// renders the "Welcome back!" message if isLoggedIn is true, otherwise it renders "Please log in."