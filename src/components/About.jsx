import React from 'react'
import {motion} from 'framer-motion';

import {styles} from '../utils/styles';
import {textVariant, fadeIn} from '../utils/motion'
import { SectionWrapper } from '../lib';
import { gridItems } from "../constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

function About() {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <div className="flex items-baseline">
          <div className="text-sm mr-2">
            01.
          </div>
          <p className ={styles.sectionSubText}>
            Introduction</p>
          <div className="self-center ml-3 bg-gray-300 bg-opacity-25 w-1/2 h-1 rounded"></div>
        </div>

        <h2 className={styles.sectionHeadText} >
          Overview </h2>

      </motion.div>
      <motion.div variants={fadeIn("right", "spring", 0.3, 1.5)}>
        <BentoGrid className="w-full py-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              imgClassName={item.imgClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}
export default SectionWrapper(About, 'about');

