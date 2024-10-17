// src/components/Character.js
import React, { useState, useEffect } from 'react';
import '../styles/Character.css'; // Ensure correct path
import characterImg from '../assets/images/character.jpg'; // Import the image

const Character = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleKeyPress = (e) => {
    const step = 10;
    let newX = position.x;
    let newY = position.y;

    // Get the dimensions of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust position based on arrow keys, but prevent the character from going outside the viewport
    if (e.key === 'ArrowUp' && position.y > 0) newY -= step;
    if (e.key === 'ArrowDown' && position.y < viewportHeight - 50) newY += step; // Character height is 50px
    if (e.key === 'ArrowLeft' && position.x > 0) newX -= step;
    if (e.key === 'ArrowRight' && position.x < viewportWidth - 50) newX += step; // Character width is 50px

    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return (
    <div
      className="character"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <img src={characterImg} alt="Character" />
      </div>
  );
};

export default Character;




