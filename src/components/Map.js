import React from 'react';
import Character from './Character';
import Section from './Section';

const Map = () => {
  return (
    <div className="map">
      {/* Character in the map */}
      <Character />


      {/* New Labels for each door */}
      <div className="door-label experience-label" style={{ top: '30%', left: '25%' }}>
        Experience
      </div>
      <div className="door-label projects-label" style={{ top: '30%', left: '48.5%' }}>
        Projects
      </div>
      <div className="door-label education-label" style={{ top: '30%', left: '72%' }}>
        Education
      </div>
      <div className="door-label volunteer-label" style={{ top: '30%', left: '83%' }}>
        Volunteer
      </div>
      <div className="door-label hobbies-label" style={{ top: '30%', left: '11.5%' }}>
        Hobbies
      </div>
    </div>
  );
};

export default Map;
