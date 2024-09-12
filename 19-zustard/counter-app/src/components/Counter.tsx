import React from 'react';
import { useCounterStore } from '../store/useCounterStore';

const Counter: React.FC = () => {
    const count = useCounterStore((state) => state.count);
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Counter: {count}</h1>
            <div className="space-x-4">
                <button
                    onClick={increment}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;