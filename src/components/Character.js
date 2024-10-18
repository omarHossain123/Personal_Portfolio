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
    // Define door positions and ranges
    const doors = {
      experience: { x: [25, 35], y: [25, 55] },
      contact: { x: [35, 52.5], y: [25, 55] },
      projects: { x: [53, 60], y: [25, 50] },
      education: { x: [63, 80], y: [25, 60] },
      volunteer: { x: [10, 25], y: [25, 55] },
    };

    // Check if character is within range of any door
    for (const [door, { x, y }] of Object.entries(doors)) {
      const isNearX = position.x >= x[0] && position.x <= x[1];
      const isNearY = position.y >= y[0] && position.y <= y[1];
      if (isNearX && isNearY) {
        setNearDoor(door);
        onNearDoor(door);
        return;
      }
    }
    setNearDoor(null);
    onNearDoor(null);
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
  
        if (nearDoor === 'projects') {
          window.location.href = '/projects'; // Navigate to the Projects page
        } else {
          alert(`You entered the ${sectionName} section!`);
        }
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
