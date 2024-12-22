import { useState } from "react";
import { Link } from "react-router";

import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../../utils/cn";

const ProjectCard = ({index, name, description, tags, icon, gitHub_link, deployed_link }) =>{
    return(
      <div className='rounded-2xl w-2xl p-4 overflow-hidden bg-[#212529] border border-white/[0.2] group-hover:white[0.1] relative'>
          <div className='relative w-full'>
              <div className='flex justify-between'>
                <div
                    onClick={() => window.open(gitHub_link, '_blank')}
                    className='flex justify-center items-center cursor-pointer transition-all duration-400 hover:text-red-500'
                >
                    <i className="fab fa-github text-2xl" />
                </div>
        
                {deployed_link && (
                    <div
                    onClick={() => window.open(deployed_link, '_blank')}
                    className='flex justify-center items-center cursor-pointer transition-all duration-400 hover:text-red-500'
                    >
                    <i className="fas fa-external-link-alt text-xl font-semibold" />
                    </div>
                )}
              </div>
      
              <div className='flex justify-center items-center m-3'>
                <i className={`text-red-500 text-8xl ${icon}`}></i>
              </div>
          </div>
      
          <div className='mt-5'>
              <h3 className='text-center font-light text-[24px] transition-all duration-400 group-hover:text-red-500'>{name}</h3>
              <p className='mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm'>{description}</p>
          </div>
      
          <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag, index) => (
              <span key={`${name}-${tag.name}-${index}`} className='text-[14px] text-red-500 capitalize'>
                  #{tag.name}
              </span>
              ))}
          </div>
      </div>
    )
}

export const HoverEffect = ({items, className}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 z-5", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#ffffff21] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <ProjectCard key={`project-${idx}`} index={idx} {...item}/>
        </Link>
      ))}
    </div>)
  );
};