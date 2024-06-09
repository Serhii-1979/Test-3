import React, { useEffect, useState } from 'react';
import './ThumbUp.css';

const ThumbUp = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 4000); // Общая продолжительность анимации

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    visible && (
      <div className="thumb-up">
        <img src="https://img.icons8.com/ios-filled/50/FFD700/thumb-up.png" alt="Thumb Up" />
      </div>
    )
  );
};

export default ThumbUp;
