import React from 'react';

/**
 * A reusable toggle button for marking student attendance as "Present" or "Absent"[cite: 14, 29].
 * @param {object} props - Component properties.
 * @param {string} props.status - The current attendance status ('Present' or 'Absent').
 * @param {function} props.onToggle - Function called when the status is changed.
 */
const AttendanceToggle = ({ status, onToggle }) => {
  const isPresent = status === 'Present';

  return (
    <div className="toggle-container">
      <button
        onClick={() => onToggle('Present')}
        className={`toggle-btn present ${isPresent ? 'active' : ''}`}
      >
        Present
      </button>
      <button
        onClick={() => onToggle('Absent')}
        className={`toggle-btn absent ${!isPresent ? 'active' : ''}`}
      >
        Absent
      </button>
    </div>
  );
};

export default AttendanceToggle;