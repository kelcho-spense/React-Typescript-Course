import React from 'react';

interface FileInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ label, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>
        {label}
      </label>
      <input type="file" onChange={onChange} />
    </div>
  );
};

interface RadioInputProps {
  label: string;
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, name, options, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label>{label}</label>
      <div>
        {options.map((option) => (
          <label key={option} style={{ marginRight: '16px' }}>
            <input type="radio" name={name} value={option} onChange={onChange} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: React.FC<RangeInputProps> = ({ label, min, max, value, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label>{label}</label>
      <input type="range" min={min} max={max} value={value} onChange={onChange} />
      <span>{value}</span>
    </div>
  );
};

interface CheckboxInputProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, checked, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export { FileInput, RadioInput, RangeInput, CheckboxInput };

// FileInput: A reusable component for <input type="file">, allowing users to select files.
// RadioInput: A reusable component for <input type="radio">, supporting multiple options.
// RangeInput: A reusable component for <input type="range">, including a slider with a label.
// CheckboxInput: A reusable component for <input type="checkbox">, with a label and toggle functionality.