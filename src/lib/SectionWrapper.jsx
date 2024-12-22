import {motion} from 'framer-motion';
import {styles} from '../utils/styles';
import {staggerContainer} from '../utils/motion';

import { LeftCol, RightCol } from '../components';

const SectionWrapper = (Component, idname) => 
  function HOC(){
    return (
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.25}}
          id={idname}
          className={`flex items-center justify-center`}>

            <span className='hash-span'>
              {/* &nbsp; */}
            </span>
            <LeftCol className= 'hidden md:flex fixed bottom-0 left-12' />
            <div className='w-[80%]'>
              <div>
                <Component/>
              </div>
            </div>
            <RightCol className='hidden md:flex fixed bottom-0 -right-10' />
        </motion.section>
    )
  }


export default SectionWrapper
