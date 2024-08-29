import React, { useState } from 'react';
import { FileInput, RadioInput, RangeInput, CheckboxInput } from './FileInput';

const SurveyForm: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [rating, setRating] = useState(5);
    const [favoriteColor, setFavoriteColor] = useState('');
    const [agree, setAgree] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files ? e.target.files[0] : null);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFavoriteColor(e.target.value);
    };

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(e.target.value));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgree(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ file, rating, favoriteColor, agree });
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <FileInput
                label="Upload Your Profile Picture"
                onChange={handleFileChange}
            />
            <RadioInput
                label="Favorite Color"
                name="color"
                options={['Red', 'Green', 'Blue']}
                onChange={handleColorChange}
            />
            <RangeInput
                label="Rate our service"
                min={1} max={10}
                value={rating}
                onChange={handleRangeChange}
            />
            <CheckboxInput
                label="I agree to the terms and conditions"
                checked={agree}
                onChange={handleCheckboxChange}
            />
            <button type="submit" style={{ padding: '10px 20px', marginTop: '20px' }}>Submit</button>
        </form>
    );
};

export default SurveyForm;

// FileInput: Used for uploading an avatar.
// RadioInput: Used to select a theme (Light or Dark).
// RangeInput: Used to adjust the volume level.
// CheckboxInput: Used to toggle notifications on or off.