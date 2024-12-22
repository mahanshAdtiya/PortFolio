import { motion} from 'framer-motion';

import { styles } from '../utils/styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../lib';
import {projects, featuredProjects} from '../constants';

import { HoverEffect } from './ui/CardHover';
import InfiniteMovingCards from './ui/InfiniteMovingCards';

function heading (){
  return(
    <motion.div variants={textVariant()}>
      <div className='flex items-baseline'>
        <div className='text-sm mr-2'>03.</div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <div className='self-center ml-3 bg-gray-300 bg-opacity-25 w-1/2 h-1 rounded'></div>
      </div>
      <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
    </motion.div>
  )
}
const Heading =  SectionWrapper(heading, 'project');

function Works() {
  return (
   <>
    <Heading />
    <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards 
        items={featuredProjects}
        direction='right'
        speed='slow'
      />
    </div>
    <div className="mx-auto px-8 w-[80%]">
      <HoverEffect items={projects} />
    </div>
   </>
  );
}
export default Works