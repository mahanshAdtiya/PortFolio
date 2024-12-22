import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import {textVariant, fadeIn} from '../utils/motion'
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import {styles} from '../utils/styles';
import { SectionWrapper } from '../lib';

import { approachData } from "../constants";

function Approach() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-baseline">
          <div className="text-sm mr-2">
            04.
          </div>
          <p className ={styles.sectionSubText}>
            Methadology</p>
          <div className="self-center ml-3 bg-gray-300 bg-opacity-25 w-1/2 h-1 rounded"></div>
        </div>

        <h2 className={styles.sectionHeadText} >
          Approach 
        </h2>

      </motion.div>
      <div className="w-full ">
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
          {approachData.map(({ title, iconOrder, description, canvasProps }, index) => (
            <motion.div 
              whileHover={{ translateY: -10 }}
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            >
              <Card
                key={index}
                title={title}
                icon={<AceternityIcon order={iconOrder} />}
                des={description}
              >
                <CanvasRevealEffect {...canvasProps} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Approach, 'approach');

  
const Card = ({ title, icon, children, des }  ) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
        dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      // style={{

      //   background: "rgb(4,7,29)",
      //   backgroundColor:
      //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      // }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] "/>
          {/* // className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
          // bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/> */}
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full px-5 py-2 text-red-500 font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};