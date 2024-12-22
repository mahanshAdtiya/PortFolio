import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { fadeIn } from "../utils/motion";
import Spotlight from "./ui/SpotLight"

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hey, I am Mahansh Aditya","<FullStack Developer/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden relative">      
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="white"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="red" />
        </div>

        {/* <div className="h-screen w-full z-100 bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div> */}

        <div className="flex justify-center relative my-20 z-10">
          <motion.div variants={fadeIn("right", "spring", 0.6, 1.5)} initial="hidden" animate="show" className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <motion.p variants={fadeIn("top", "spring", 0.8, 1.5)} className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Your friendly neighbourhood Software Developer
            </motion.p>

            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <motion.p variants={fadeIn("bottom", "spring", 0.8, 1.5)} className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              <span>{text}</span>
              <Cursor cursorColor="#ef4444" />
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center"
        variants={fadeIn("down", "spring", 0.4, 1.3)}
        initial="hidden"
        animate="show"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#e23b3b] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
