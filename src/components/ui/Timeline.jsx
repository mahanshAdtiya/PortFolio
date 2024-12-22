import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Image } from "react-bootstrap";

import { fadeIn } from "../../utils/motion";

function Timeline({data}) {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }, [ref]);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 10%", "end 50%"],
    });
  
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
    return (
      (<motion.div
        variants={fadeIn("left", "spring", 0.2, 1.8)}
        className="w-full font-sans md:px-10 mb-10"
        ref={containerRef}>
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                    </div>
                    <div className="hidden md:flex flex-col gap-4">
                        <h3 className="text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                            {item.title}
                        </h3>
                        <h4 className="text-lg md:pl-20 md:text-3xl font-bold text-red-500">
                            {item.company}
                        </h4>
                        <p className="text-md md:pl-20 md:text-xl font-bold text-neutral-600">
                            {item.time}
                        </p>
                    </div>
                </div>
    
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    <div className="md:hidden block">
                        <h3 className="text-2xl mb-4 text-left font-bold text-neutral-400">
                            {item.title}
                        </h3>
                        <h4 className="text-xl mb-4 text-left font-bold text-red-500">
                            {item.company}
                        </h4>
                        <p className="text-sm mb-4 text-left font-bold text-neutral-600">
                            {item.time}
                        </p>
                    </div>
                    {/* {item.content} */}
                    <div>
                      {item.points.map((point, index) => (
                        <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4" key={index}>
                          {point}
                        </p>  
                      ))}
                      <div className="grid grid-cols-2 gap-4">
                        {item.images.map((image, index) => (
                          <Image
                            src={image}
                            alt="startup template"
                            key={index}
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                          />
                        ))}
                      </div>
                    </div>
                    {" "}
                </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-red-500 to-transparent from-[0%] via-[10%] rounded-full" />
          </div>
        </div>
      </motion.div>
      )
    );
}

export default Timeline


