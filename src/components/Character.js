import React, { useState, useEffect } from 'react';
import characterImg from '../assets/images/character.png'; 

const Character = () => {
  const [position, setPosition] = useState({ x: 43, y: 68 });

  const handleKeyPress = (e) => {
    const step = 2; // Step size in percentage
    let newX = position.x;
    let newY = position.y;

    // Prevent moving outside the window bounds (accounting for the 200px character size)
    const mapWidth = 100;  // 100% width
    const mapHeight = 100; // 100% height

    // Calculate the percentage width of the character relative to viewport
    const characterWidthPercentage = (200 / window.innerWidth) * 100; // For width in percentage
    const characterHeightPercentage = (200 / window.innerHeight) * 100; // For height in percentage

    // Adjust position based on arrow keys while preventing overflow outside the map
    if (e.key === 'ArrowUp' && position.y > 0) newY -= step;
    if (e.key === 'ArrowDown' && position.y < mapHeight - characterHeightPercentage) newY += step;
    if (e.key === 'ArrowLeft' && position.x > 0) newX -= step;
    if (e.key === 'ArrowRight' && position.x < mapWidth - characterWidthPercentage) newX += step;

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
        top: `${position.y}%`,
        left: `${position.x}%`,
      }}
    >
      <img src={characterImg} alt="Character" />
    </div>
  );
};

export default Character;
