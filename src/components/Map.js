import React from 'react';
import Character from './Character';
import Section from './Section';

const Map = () => {
  return (
    <div className="map">
      <Character />
      <Section name="Experience" position={{ top: '35%', left: '15%' }} />
      <Section name="Projects" position={{ top: '35%', left: '45%' }} />
      <Section name="Education" position={{ top: '35%', left: '75%' }} />
    </div>
  );
};

export default Map;
