import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion'; 

function LeftCol({ className }) {
  return (
    <ul className={`flex justify-center flex-col items-center ${className}`}>
      <motion.li variants={fadeIn('up', 'spring', 0.1, 1)} initial="hidden" animate="show">
        <a target="_blank" rel="noreferrer" href="https://github.com/mahanshAdtiya">
          <i className="fab fa-github-alt text-2xl transform transition ease-in-out duration-300 hover:translate-y-[-2px] hover:text-red-500" />
        </a>
      </motion.li>
      <motion.li className="py-4" variants={fadeIn('up', 'spring', 0.2, 1)} initial="hidden" animate="show">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahansh-aditya/">
          <i className="fab fa-linkedin-in text-2xl transform transition ease-in-out duration-300 hover:translate-y-[-2px] hover:text-red-500" />
        </a>
      </motion.li>
      <motion.li className="w-1 h-28 rounded-lg bg-gray-600" variants={fadeIn('up', 'spring', 0.3, 1)} initial="hidden" animate="show"></motion.li>
    </ul>
  );
}

export default LeftCol;
