import React from 'react';

/**
 * A reusable, well-documented Input component for forms[cite: 13, 29].
 * This avoids writing raw <input> elements everywhere.
 * @param {object} props - Component properties.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.type - The input type (e.g., 'email', 'password').
 * @param {string} props.value - The current value of the input.
 * @param {function} props.onChange - The function to call on value change.
 * @param {string} props.placeholder - The placeholder text.
 */
const Input = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;