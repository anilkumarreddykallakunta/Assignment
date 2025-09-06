import React from 'react';

/**
 * A reusable Card component to wrap content sections consistently[cite: 16, 29].
 * @param {object} props - Component properties.
 * @param {string} [props.title] - An optional title for the card.
 * @param {React.ReactNode} props.children - The content to display inside the card.
 */
const Card = ({ title, children }) => {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;