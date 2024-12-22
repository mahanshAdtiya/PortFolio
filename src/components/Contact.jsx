import {motion} from 'framer-motion';
import { FaLocationArrow } from "react-icons/fa6";

import {fadeIn} from '../utils/motion'
import { socialMedia } from "../constants";
import MagicButton from "./ui/MagicButton";

import { SectionWrapper } from "../lib";

function Contact() {
  return (
    <footer className="pt-20 pb-10">
      <div className="flex flex-col items-center">
        <motion.h1 variants={fadeIn("right", "spring", 0.3, 1.5)} className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-red-500">your</span> digital
          presence to the next level?
        </motion.h1>
        <motion.p variants={fadeIn("left", "spring", 0.3, 1.5)} className="text-neutral-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </motion.p>
        <motion.a variants={fadeIn("up", "spring", 0.3, 1.5)} href="mailto:singh.mahansh@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </motion.a>
      </div>
      <motion.div variants={fadeIn("up", "spring", 0.3, 1.5)} className="flex mt-16 md:flex-row flex-col gap-5 md:gap-0 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mahansh Aditya
        </p>

        <div className="flex items-center md:gap-3 gap-6 md:hidden">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-transparent rounded-lg border border-red-500"
            >
              <a target="_blank" rel="noreferrer" href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}

export default SectionWrapper(Contact, "contact");