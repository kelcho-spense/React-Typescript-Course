import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Directly focus the input element
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus me!" />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
};

export default FocusInput;