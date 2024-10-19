import React, { useState } from 'react';
import Character from './Character';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Map = () => {
  const [glowingDoor, setGlowingDoor] = useState(null); // Track which door should glow
  const navigate = useNavigate(); // Hook for navigation

  // This function is passed down to Character to update the glowing door
  const handleNearDoor = (door) => {
    setGlowingDoor(door);
  };

  // Handle clicking the Projects section
  const handleSectionClick = (section) => {
    if (section === 'projects') {
      navigate('/projects'); // Navigate to the Projects page
    } else {
      alert(`You entered the ${section} section!`); // Default behavior for other sections
    }
  };

  return (
    <div className="map">
      {/* Character in the map */}
      <Character onNearDoor={handleNearDoor} />

      {/* Updated Door labels with conditional glow effect */}
      <div
        className={`door-label experience-label ${glowingDoor === 'experience' ? 'glow' : ''}`}
        style={{ top: '30%', left: '30.3%' }}
        onClick={() => handleSectionClick('experience')}
      >
        Experience
      </div>
      <div
        className={`door-label contact-label ${glowingDoor === 'contact' ? 'glow' : ''}`} // Renamed to Contact Me
        style={{ top: '30%', left: '45%' }}
        onClick={() => handleSectionClick('contact')}
      >
        Contact Me
      </div>
      <div
        className={`door-label projects-label ${glowingDoor === 'projects' ? 'glow' : ''}`} // Updated to Projects
        style={{ top: '30%', left: '62.6%' }}
        onClick={() => handleSectionClick('projects')} // Updated action to navigate
      >
        Projects
      </div>
      <div
        className={`door-label education-label ${glowingDoor === 'education' ? 'glow' : ''}`} // Updated to Education
        style={{ top: '30%', left: '77.3%' }}
        onClick={() => handleSectionClick('education')}
      >
        Education
      </div>
      <div
        className={`door-label volunteer-label ${glowingDoor === 'volunteer' ? 'glow' : ''}`} // Updated to Volunteer
        style={{ top: '30%', left: '12.2%' }}
        onClick={() => handleSectionClick('volunteer')}
      >
        Volunteer
      </div>
    </div>
  );
};

export default Map;
