import React, { useState, useRef, useEffect } from 'react';

const Timer: React.FC = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null); // Persist the interval ID

    useEffect(() => {
        // Optional: Start the timer automatically when the component mounts
        startTimer();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const startTimer = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; // Clear the interval reference
        }
    };

    const resetTimer = () => {
        stopTimer(); // Stop the timer before resetting
        setCount(0); // Reset the count to 0
    };

    return (
        <div>
            <p>Timer: {count} seconds</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;


// Persisting Values: useRef is used to store the interval ID, which persists across renders.

// No Re-render on Update: Updating intervalRef.current does not cause the component to re-render,
//  which is ideal for managing values like timers, IDs, or instances.