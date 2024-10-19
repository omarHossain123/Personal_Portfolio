import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import './Projects.css';
import characterImg from '../../assets/images/character.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 

const Projects = () => {
  const [showSpeech, setShowSpeech] = useState(true);

  const projects = [
    { name: 'Contact Management System', description: 'Developed a full-stack web application using', date: 'September 2024' },
    { name: 'Maze Master Game', description: 'Developed a multi-level maze game using ', date: 'July 2024' },
    { name: '3D RPG Game', description: 'Developed a modular class hierarchy using ', date: 'Ongoing' },
    { name: 'Image Adjustor Application', description: 'Developed an image resolution adjustor using', date: 'June 2024' },
    { name: 'Tic Tac Toe Game', description: 'Developed a tic-tac-toe game using', date: 'May 2024' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="projects-page">
      {/* Home Button */}
      <Link to="/" className="home-button">
        <div className="icon-container">
          <FontAwesomeIcon icon={faHome} className="home-icon" />
          <span className="home-label">Home</span>
        </div>
      </Link>

      {/* Character with speech bubble */}
      <div className="character-container">
        <motion.img
          src={characterImg}
          alt="Character"
          className="character-image"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
        />
        {showSpeech && (
          <motion.div
            className="speech-bubble"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <button className="close-button" onClick={() => setShowSpeech(false)}>X</button>
            <p>Welcome to the missions section! These over here are your missions. Select one to embark on your adventure!</p>
          </motion.div>
        )}
      </div>

      {/* Project list */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="project-list"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} className="project-item">
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-date">{project.date}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
