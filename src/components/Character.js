import React, { useState, useEffect, useCallback } from 'react';
import characterImg from '../assets/images/character.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Character = ({ onNearDoor }) => {
  const [position, setPosition] = useState({ x: 43, y: 68 });
  const [nearDoor, setNearDoor] = useState(null); // Track if character is near any door
  const [showSpeechBubble, setShowSpeechBubble] = useState(true); // New state to track speech bubble visibility

  const handleKeyPress = useCallback((e) => {
    const step = 2; // Step size in percentage
    let newX = position.x;
    let newY = position.y;

    const mapWidth = 100;  // 100% width
    const mapHeight = 100; // 100% height

    const characterWidthPercentage = (200 / window.innerWidth) * 100; // Character width in percentage
    const characterHeightPercentage = (200 / window.innerHeight) * 100; // Character height in percentage

    // Adjust position based on arrow keys
    if (e.key === 'ArrowUp' && position.y > 0) newY -= step;
    if (e.key === 'ArrowDown' && position.y < mapHeight - characterHeightPercentage) newY += step;
    if (e.key === 'ArrowLeft' && position.x > 0) newX -= step;
    if (e.key === 'ArrowRight' && position.x < mapWidth - characterWidthPercentage) newX += step;

    setPosition({ x: newX, y: newY });
  }, [position]);

  const checkProximity = useCallback(() => {
    // Define door positions
    const doors = {
      experience: { x: 25, y: 30 },
      contact: { x: 47.5, y: 30 },
      projects: { x: 65, y: 30 },
      education: { x: 75, y: 30 },
      volunteer: { x: 11, y: 30 },
    };

    // Check proximity to each door
    for (const [door, { x, y }] of Object.entries(doors)) {
      const isNear = Math.abs(position.x - x) < 5 && Math.abs(position.y - y) < 5;
      if (isNear) {
        setNearDoor(door); // Set the current door the character is near
        onNearDoor(door); // Call parent function to update glowing door
        return;
      }
    }
    setNearDoor(null); // No door nearby
    onNearDoor(null); // Clear glowing door
  }, [position, onNearDoor]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    checkProximity(); // Check proximity whenever position changes

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress, checkProximity]);

  // Handle Enter key press to trigger section entry
  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.key === 'Enter' && nearDoor) {
        const sectionNames = {
          experience: "Experience",
          contact: "Contact Me",
          projects: "Projects",
          education: "Education",
          volunteer: "Volunteer"
        };
        
        const sectionName = sectionNames[nearDoor];
        alert(`You entered the ${sectionName} section!`);
      }
    };

    window.addEventListener('keydown', handleEnterPress);
    return () => {
      window.removeEventListener('keydown', handleEnterPress);
    };
  }, [nearDoor]);

  return (
    <div
      className="character"
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
      }}
    >
      <img src={characterImg} alt="Character" />
      
      {/* Speech bubble section */}
      {showSpeechBubble && (
        <div className="speech-bubble">
          <p>Hi! Welcome to my Personal Portfolio website. I am Mini Omar, your personal tour guide. You can move me around using the arrow keys. Happy exploring!</p>
          <button className="close-btn" onClick={() => setShowSpeechBubble(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Character;
