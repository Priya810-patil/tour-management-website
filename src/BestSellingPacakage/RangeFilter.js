import React, { useState } from 'react';
import './RangeFilter.css'; // Create a CSS file for the component styles

const RangeFilter = () => {
  const [value, setValue] = useState(1);

  const getTrackStyle = (val) => {
    // The original getTrackStyle function without DOM manipulation
    // ... (The entire getTrackStyle function code goes here)
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    const sheet = document.createElement('style');
    sheet.textContent = getTrackStyle(e.target);
    document.body.appendChild(sheet);
  };

  const handleLabelClick = (index) => {
    setValue(index + 1);
    const sheet = document.createElement('style');
    sheet.textContent = getTrackStyle({ value: index + 1 });
    document.body.appendChild(sheet);
  };

  return (
    <div className='rangemain'>
      <div className="range">
        <input
          type="range"
          min="1"
          max="7"
          step="1"
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <ul className="range-labels">
        <li
          className={`active ${value === 1 ? 'selected' : ''}`}
          onClick={() => handleLabelClick(0)}
        >
          1 to 2 Days
        </li>
        <li
          className={`active ${value === 1 ? 'selected' : ''}`}
          onClick={() => handleLabelClick(0)}
        >
          3 to 5 Days
        </li>
        <li
          className={value === 2 ? 'selected' : ''}
          onClick={() => handleLabelClick(1)}
        >
          5 to 8 Days
        </li>
        <li
          className={value === 3 ? 'selected' : ''}
          onClick={() => handleLabelClick(2)}
        >
          9 to 12 Days
        </li>
        <li
          className={value === 4 ? 'selected' : ''}
          onClick={() => handleLabelClick(3)}
        >
          12 to 14 days
        </li>
        <li
          className={value === 5 ? 'selected' : ''}
          onClick={() => handleLabelClick(4)}
        >
          14 days and More
        </li>
        <li
          className={value === 5 ? 'selected' : ''}
          onClick={() => handleLabelClick(4)}
        >
          Not decided Yet!
        </li>
      </ul>
    </div>
  );
};

export default RangeFilter;
