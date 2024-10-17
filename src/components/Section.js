// src/components/Section.js
import React from 'react';
import '../styles/Section.css';

const Section = ({ name, position }) => {
  return (
    <div className="section" style={position}>
      <h2>{name}</h2>
    </div>
  );
};

export default Section;
