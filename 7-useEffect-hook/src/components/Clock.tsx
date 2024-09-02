import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once, on mount

    return <div>Current Time: {time.toLocaleTimeString()}</div>;
};

export default Clock;

// Setting Up Subscriptions: The setInterval function is used to update the time every second. 
// This is an example of synchronizing with an external system (in this case, the browser’s timing API).

// Cleanup: The return statement inside useEffect is a cleanup function that clears the interval when the
//  component unmounts, preventing memory leaks.