import React, { useState } from 'react';

const FormSubmitExample: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted with value:', inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormSubmitExample;