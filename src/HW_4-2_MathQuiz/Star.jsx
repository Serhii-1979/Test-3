import React from 'react';
import './Star.css';

const Star = ({ active }) => {
  return (
    <div className={`star ${active ? 'active' : ''}`}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.09 8.26L20 9.27L15.64 13.14L16.87 19.02L12 16.77L7.13 19.02L8.36 13.14L4 9.27L9.91 8.26L12 2Z" fill="currentColor"/>
      </svg>
    </div>
  );
};

export default Star;
