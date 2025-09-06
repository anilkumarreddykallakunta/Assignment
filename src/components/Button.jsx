import React from 'react';

/**
 * A reusable, well-documented Button component[cite: 13, 29].
 * @param {object} props - Component properties.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {function} props.onClick - The function to call on click.
 * @param {string} [props.type='button'] - The button type.
 */
const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;