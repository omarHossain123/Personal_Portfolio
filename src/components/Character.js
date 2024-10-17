import React, { useState, useEffect, useCallback } from 'react';
import characterImg from '../assets/images/character.png'; 

const Character = ({ onNearDoor }) => {
  const [position, setPosition] = useState({ x: 43, y: 68 });
  const [nearDoor, setNearDoor] = useState(null); // Track if character is near any door

  const handleKeyPress = useCallback((e) => {
    const step = 2; // Step size in percentage
    let newX = position.x;
    let newY = position.y;

    // Prevent moving outside the window bounds
    const mapWidth = 100;  // 100% width
    const mapHeight = 100; // 100% height

    // Calculate character dimensions in percentage
    const characterWidthPercentage = (200 / window.innerWidth) * 100; // For width in percentage
    const characterHeightPercentage = (200 / window.innerHeight) * 100; // For height in percentage

    // Adjust position based on arrow keys while preventing overflow outside the map
    if (e.key === 'ArrowUp' && position.y > 0) newY -= step;
    if (e.key === 'ArrowDown' && position.y < mapHeight - characterHeightPercentage) newY += step;
    if (e.key === 'ArrowLeft' && position.x > 0) newX -= step;
    if (e.key === 'ArrowRight' && position.x < mapWidth - characterWidthPercentage) newX += step;

    setPosition({ x: newX, y: newY });
  }, [position]); // Add position as a dependency

  const checkProximity = useCallback(() => {
    // Define door positions
    const doors = {
      experience: { x: 25, y: 30 },
      contact: { x: 47.5, y: 30 }, // Updated to 'contact'
      projects: { x: 65, y: 30 },
      education: { x: 75, y: 30 },
      volunteer: { x: 11, y: 30 },
    };

    // Check proximity to each door
    for (const [door, { x, y }] of Object.entries(doors)) {
      const isNear = Math.abs(position.x - x) < 5 && Math.abs(position.y - y) < 5; // Adjust proximity threshold
      if (isNear) {
        setNearDoor(door); // Set the current door the character is near
        onNearDoor(door); // Call the parent function to update the glowing door
        return;
      }
    }
    setNearDoor(null); // No door nearby
    onNearDoor(null); // Clear glowing door
  }, [position, onNearDoor]); // Add position and onNearDoor as dependencies

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    
    // Check proximity whenever position changes
    checkProximity(); 

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress, checkProximity]); // Include both functions in the dependency array

  // New effect to handle Enter key press
  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.key === 'Enter' && nearDoor) {
        const sectionNames = {
          experience: "Experience",
          contact: "Contact Me", // Updated to Contact Me
          projects: "Projects",
          education: "Education",
          volunteer: "Volunteer"
        };
        
        // Use the nearDoor to get the correct section name
        const sectionName = sectionNames[nearDoor];
        alert(`You entered the ${sectionName} section!`);
        // You can add additional logic here to actually navigate to the section
      }
    };

    window.addEventListener('keydown', handleEnterPress);

    return () => {
      window.removeEventListener('keydown', handleEnterPress);
    };
  }, [nearDoor]); // Run this effect whenever nearDoor changes

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
