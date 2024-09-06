import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceCard.css';

const ExperienceCard = () => {
  return (
    <motion.div 
      className="experience-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="experience-content">
        <h2>Bharti Airtel Ltd.</h2>
        <ul>
          <li>- Developed a web-based application to streamline the process of uploading, verifying, and managing diverse documents
          such as income tax forms and bills.</li>
          <li>- Architected a modular MVC framework and created some APIs for efficient data handling, streamlined data
          uploading processes</li>
          <li>- Employed a diverse set of technologies, including React, JavaScript, Spring Boot, Spring Security, Java, and
MySQL.</li>
        </ul>
      </div>
      <motion.div 
        className="experience-role"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
      >
        Software Engineering Intern
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
