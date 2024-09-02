import React, { useState } from 'react';

const AndOperatorExample: React.FC = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    return (
        <div>
            {isAdmin && <p>You have admin privileges.</p>}
            <button onClick={() => setIsAdmin(!isAdmin)}>
                Toggle Admin Status
            </button>
        </div>
    );
};

export default AndOperatorExample;