import React from 'react';

interface TextareaProps {
  id: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ id, label, placeholder, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        placeholder={placeholder}
        rows={5}
      />
    </div>
  );
};

export default Textarea;
