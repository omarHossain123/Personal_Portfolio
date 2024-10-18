import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Contact Management System', description: 'Developed a full-stack web application using', date: 'September 2024' },
    { name: 'Maze Master Game', description: 'Developed a multi-level maze game using ', date: 'July 2024' },
    { name: '3D RPG Game', description: 'Developed a modular class hierarchy using ', date: 'Ongoing' },
    { name: 'Image Adjustor Application', description: 'Developed an image resolution adjustor using', date: 'June 2024' },
    { name: 'Tic Tac Toe Game', description: 'Developed a tic-tac-toe game using', date: 'May 2024' },
  ];

  return (
    <div className="projects-page">
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-date">{project.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
