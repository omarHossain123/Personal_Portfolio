import React from 'react';

const Section = ({ name, position }) => {
  return (
    <div className="section" style={position}>
      <h2>{name}</h2>
    </div>
  );
};

export default Section;
