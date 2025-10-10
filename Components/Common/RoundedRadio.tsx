import React from 'react';

type RoundedRadioProps = {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
};

const RoundedRadio: React.FC<RoundedRadioProps> = ({ label, value, selected, onChange }) => {
  return (
    <label
      className={`flex items-center px-6 py-3 border rounded-full cursor-pointer transition
        ${selected ? 'border-primary' : 'border-primary'}
      `}
    >
      <input
        type="radio"
        name="work"
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="form-radio text-primary mr-2 w-4 h-4 outline-primary accent-primary"
      />
      <span className="text-black font-medium">{label}</span>
    </label>
  );
};

export default RoundedRadio;
