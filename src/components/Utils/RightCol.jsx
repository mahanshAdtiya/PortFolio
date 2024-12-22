import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion'; 

function RightCol({ className }) {
  return (
    <ul className={`flex justify-center flex-col items-center ${className}`}>
      <li
        className='col-content rotate-90 mb-14 transform transition ease-in-out duration-300 hover:translate-y-[-2px]'>
        <a target="_blank" rel="noreferrer" href="mailto:singh.mahansh@gmail.com">
          <motion.span
            className='transform transition ease-in-out duration-300 hover:text-red-500'
            variants={fadeIn('up', 'spring', 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            singh.mahansh@gmail.com
          </motion.span>
        </a>
      </li>
      <motion.li
        className="w-1 h-28 rounded-lg bg-gray-600 mt-14"
        variants={fadeIn('up', 'spring', 0.3, 1)}
        initial="hidden"
        animate="show"
      />
    </ul>
  );
}

export default RightCol;
