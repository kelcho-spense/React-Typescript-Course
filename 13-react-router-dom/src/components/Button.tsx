import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'submit' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;
