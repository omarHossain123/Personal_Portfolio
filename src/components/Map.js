// src/components/Map.js
import React from 'react';
import '../styles/Map.css';
import Character from './Character';
import Section from './Section';

const Map = () => {
  return (
    <div className="map">
      {/* Character on the map */}
      <Character />

      {/* Different sections */}
      <Section name="Experience" position={{ top: '100px', left: '200px' }} />
      <Section name="Projects" position={{ top: '300px', left: '400px' }} />
      <Section name="Education" position={{ top: '500px', left: '100px' }} />
    </div>
  );
};

export default Map;
