import React, { useState } from 'react';

const ScrollExample: React.FC = () => {
    const [scrollTop, setScrollTop] = useState<number>(0);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    return (
        <div
            onScroll={handleScroll}
            style={{ overflowY: 'scroll', height: '200px', border: '1px solid black' }}
        >
            <div style={{ height: '500px', padding: '10px' }}>
                Scroll to see the effect
            </div>
            <p>Scroll position: {scrollTop}px</p>
        </div>
    );
};

export default ScrollExample;