import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;  // Optional prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return <button onClick={onClick} disabled={disabled}> {label} </button>;
};

export default Button;