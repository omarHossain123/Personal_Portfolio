import React, { useState } from 'react';
import Character from './Character';

const Map = () => {
  const [glowingDoor, setGlowingDoor] = useState(null); // Track which door should glow

  // This function is passed down to Character to update the glowing door
  const handleNearDoor = (door) => {
    setGlowingDoor(door);
  };

  return (
    <div className="map">
      {/* Character in the map */}
      <Character onNearDoor={handleNearDoor} />

      {/* Updated Door labels with conditional glow effect */}
      <div
        className={`door-label experience-label ${glowingDoor === 'experience' ? 'glow' : ''}`}
        style={{ top: '30%', left: '25%' }}
        onClick={() => alert('You entered the Experience section!')} // Trigger action on click
      >
        Experience
      </div>
      <div
        className={`door-label contact-label ${glowingDoor === 'contact' ? 'glow' : ''}`} // Renamed to Contact Me
        style={{ top: '30%', left: '47.5%' }}
        onClick={() => alert('You entered the Contact Me section!')} // Updated alert message
      >
        Contact Me
      </div>
      <div
        className={`door-label projects-label ${glowingDoor === 'projects' ? 'glow' : ''}`} // Updated to Projects
        style={{ top: '30%', left: '72.5%' }}
        onClick={() => alert('You entered the Projects section!')} // Updated alert message
      >
        Projects
      </div>
      <div
        className={`door-label education-label ${glowingDoor === 'education' ? 'glow' : ''}`} // Updated to Education
        style={{ top: '30%', left: '83%' }}
        onClick={() => alert('You entered the Education section!')} // Updated alert message
      >
        Education
      </div>
      <div
        className={`door-label volunteer-label ${glowingDoor === 'volunteer' ? 'glow' : ''}`} // Updated to Volunteer
        style={{ top: '30%', left: '11%' }}
        onClick={() => alert('You entered the Volunteer section!')} // Updated alert message
      >
        Volunteer
      </div>
    </div>
  );
};

export default Map;
