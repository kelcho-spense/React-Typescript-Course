import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
    // Retrieve from localStorage or use the initial value
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Failed to read from localStorage:", error);
            return initialValue;
        }
    });

    // Custom setter function to update state and localStorage
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // If the new value is a function, call it with the current state
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Failed to write to localStorage:", error);
        }
    };

    return [storedValue, setValue] as const;
    

// Custom Hook (useLocalStorage): This hook manages a piece of state that is synchronized with localStorage.

// Generic Type <T>: The hook is generic, meaning it can handle any type of data (string, number, object, etc.).

// Persisting State: The hook retrieves the initial value from localStorage (if available) and sets up a setter 
// function that updates both the state and localStorage.
}

