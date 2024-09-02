import React, { useState } from 'react'

const OnChangeExample: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue)
    };

    return <input type="text" value={inputValue} onChange={handleChange} />;
}

export default OnChangeExample