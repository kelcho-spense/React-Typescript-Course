import React, { useEffect, useState } from 'react';

const WindowScrollExample: React.FC = () => {
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <p>Scroll position: {scrollY}px</p>;
};

export default WindowScrollExample;