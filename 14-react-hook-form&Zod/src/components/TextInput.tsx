import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
