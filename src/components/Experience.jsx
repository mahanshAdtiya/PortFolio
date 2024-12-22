import React from 'react'
import {motion} from 'framer-motion';

import Timeline from './ui/Timeline';
import { SectionWrapper } from '../lib';
import {textVariant} from '../utils/motion'
import { experience } from '../constants';
import {styles} from '../utils/styles';
import "../styles/Experience.css"

function Experience() { 
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-baseline">
          <div className="text-sm mr-2">02.</div>
          <p className={styles.sectionSubText}>
            Contribution to Real Life Organisations
          </p>
          <div className="self-center ml-3 bg-gray-300 bg-opacity-25 w-1/2 h-1 rounded"></div>
        </div>
        <h2 className={styles.sectionHeadText}>
          Experience
        </h2>
      </motion.div>
      <Timeline data={experience} />
    </>
  )
}

export default SectionWrapper(Experience, 'experience');;